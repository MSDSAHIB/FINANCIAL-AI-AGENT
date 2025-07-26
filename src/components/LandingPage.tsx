import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Calculator, TrendingUp, Shield, Brain, ChevronRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-financial.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calculator,
      title: "Tax Optimization",
      description: "Get personalized tax strategies and deduction recommendations"
    },
    {
      icon: TrendingUp,
      title: "Investment Analysis",
      description: "AI-powered portfolio analysis and investment recommendations"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Comprehensive financial risk evaluation and mitigation strategies"
    },
    {
      icon: Brain,
      title: "Smart Insights",
      description: "Advanced AI analysis of your financial patterns and opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                FinanceAI Pro
              </span>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate('/chat')}
              className="hover:bg-primary/10"
            >
              Start Chat
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Your AI-Powered
                  <span className="block bg-gradient-primary bg-clip-text text-transparent">
                    Financial Advisor
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Get expert guidance on taxes, loans, investments, and financial planning. 
                  Our advanced AI provides personalized solutions for all your financial needs.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={() => navigate('/chat')}
                  className="group"
                >
                  Start Financial Chat
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100k+</div>
                  <div className="text-sm text-muted-foreground">Questions Answered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">$2M+</div>
                  <div className="text-sm text-muted-foreground">Savings Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-glow">98%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img 
                  src={heroImage} 
                  alt="Financial AI Technology"
                  className="w-full h-auto animate-float"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From tax planning to investment strategies, our AI handles all aspects of your financial life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of users who've already optimized their finances with AI
            </p>
            <Button 
              variant="glow" 
              size="lg"
              onClick={() => navigate('/chat')}
              className="animate-pulse-glow"
            >
              Get Started Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;