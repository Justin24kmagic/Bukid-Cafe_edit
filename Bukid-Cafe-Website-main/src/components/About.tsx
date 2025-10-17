import { Heart, Sprout, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary mb-4">
            Our Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey rooted in community, nature, and the love for good coffee
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="font-display font-semibold text-2xl md:text-3xl text-primary mb-6">
              Born from the Heart of Bukid
            </h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                Bukid Café started as a simple dream: to bring the warmth and tranquility 
                of Philippine countryside living to a cozy coffee shop experience. 
                Inspired by the lush farms ("bukid") of Morong, Rizal, we wanted to create 
                a space where nature and community come together over exceptional coffee.
              </p>
              <p>
                What began as a small local café has grown into a beloved gathering spot 
                for coffee lovers, students, remote workers, and families seeking good vibes 
                and great flavors. Our commitment to quality, local sourcing, and sustainable 
                practices reflects our deep connection to the land and people of Rizal.
              </p>
              <p>
                Today, we're not just a café — we're a community hub where stories are shared, 
                friendships are made, and every cup is brewed with care and passion.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 animate-scale-in">
            <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xl mb-2 text-primary">
                    Community-Driven
                  </h4>
                  <p className="text-muted-foreground">
                    Built by locals, for locals. We celebrate Philippine culture, 
                    support local farmers, and create a welcoming space for everyone.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Sprout className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xl mb-2 text-primary">
                    Nature-Inspired
                  </h4>
                  <p className="text-muted-foreground">
                    From our rustic wooden interiors to our plant-filled corners, 
                    every detail brings the calming essence of the countryside indoors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-hover transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-full">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-xl mb-2 text-primary">
                    Good Vibes Only
                  </h4>
                  <p className="text-muted-foreground">
                    Whether you're here to work, relax, or catch up with friends, 
                    our friendly atmosphere makes you feel right at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl shadow-card text-center animate-fade-in">
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-4">
            More Than Just Coffee
          </h3>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            We believe in the power of good food, great coffee, and genuine connections. 
            Every visit to Bukid Café is an invitation to slow down, savor the moment, 
            and enjoy life's simple pleasures — just like in the countryside.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
