import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import Papa from "papaparse";

const Testimonials = () => {
  const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTFnL18A-Wb1_S1R499-qqXQ1UnF3CIkdg-fkZsvVsdXF7ecv3ILd66OH4S0PnwXTFudrRS0tKc3H0D/pub?output=csv";

  const [liveReviews, setLiveReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine reviews per page based on window width
  const reviewsPerPage = windowWidth < 640 ? 4 : 6;

  // Fetch Google Sheet CSV
  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.text())
      .then((csv) => {
        Papa.parse(csv, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsed = results.data
              .map((row) => {
                const normalized: Record<string, string> = {};
                for (let key in row) {
                  normalized[key.trim().toLowerCase()] = row[key]?.trim();
                }
                return {
                  name: normalized["name"] || "",
                  role: normalized["role"] || "",
                  text: normalized["review"] || "",
                  rating: parseInt(normalized["rating"]) || 5,
                  timestamp: normalized["timestamp"] || "",
                };
              })
              .filter((r) => r.text && r.timestamp)
              .sort(
                (a, b) =>
                  new Date(b.timestamp).getTime() -
                  new Date(a.timestamp).getTime()
              );
            setLiveReviews(parsed);
          },
        });
      });
  }, []);

  const formatDate = (ts: string) => {
    if (!ts) return "";
    const date = new Date(ts);
    return date.toLocaleDateString("en-PH", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Pagination calculations
  const totalPages = Math.ceil(liveReviews.length / reviewsPerPage);
  const indexOfLast = currentPage * reviewsPerPage;
  const indexOfFirst = indexOfLast - reviewsPerPage;
  const currentReviews = liveReviews.slice(indexOfFirst, indexOfLast);

  const goToPage = (page: number) => setCurrentPage(page);
  const goNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don’t just take our word for it — hear from our happy coffee lovers!
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentReviews.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all hover-lift"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                  {testimonial.timestamp
                    ? ` • ${formatDate(testimonial.timestamp)}`
                    : ""}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center gap-2 flex-wrap items-center">
            <button
              onClick={goPrev}
              className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-1 rounded-md font-semibold transition ${
                  currentPage === i + 1
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={goNext}
              className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300"
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
      <br></br><br></br><br></br>
        {/* Review CTA Button */}
        <div className="mb-16 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSchcztDSYfQYfvuBl4Q2PywNA0NmTSSlkX3e9tSMG_7RZEXTg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11/12 md:w-3/4 lg:w-2/3 px-8 py-6 bg-primary text-white font-bold text-2xl rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 text-center"
          >
            Leave a Review
          </a>
        </div>
    </section>
  );
};

export default Testimonials;
