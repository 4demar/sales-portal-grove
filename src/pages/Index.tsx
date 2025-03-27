
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShieldCheck, BarChart3, Users } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-4 px-6 border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container max-w-6xl flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-tight">SalesHub</h1>
          <div className="space-x-2">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="px-4 h-9"
            >
              Sign In
            </Button>
            <Button 
              onClick={() => navigate('/signup')}
              className="px-4 h-9"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-16 px-6 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="container max-w-3xl space-y-6 animate-fade-in">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-4">
            <span>Sales & Inventory Management</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Streamline Your Business Operations
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive solution for managing sales, inventory, and customer relationships all in one platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              onClick={() => navigate('/signup')} 
              size="lg" 
              className="gap-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              onClick={() => navigate('/login')} 
              variant="outline" 
              size="lg"
            >
              Sign In to Dashboard
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Everything You Need</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our platform provides all the tools you need to manage your business efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-lg p-6 border bg-card shadow-subtle transition-all duration-200 hover:shadow-elevation">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sales Tracking</h3>
              <p className="text-muted-foreground">
                Monitor all your sales activities, track orders, and analyze performance with comprehensive reports.
              </p>
            </div>

            <div className="rounded-lg p-6 border bg-card shadow-subtle transition-all duration-200 hover:shadow-elevation">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
              <p className="text-muted-foreground">
                Keep track of your stock levels, receive low inventory alerts, and manage your products efficiently.
              </p>
            </div>

            <div className="rounded-lg p-6 border bg-card shadow-subtle transition-all duration-200 hover:shadow-elevation">
              <div className="h-12 w-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Management</h3>
              <p className="text-muted-foreground">
                Build and maintain your customer database, track purchase history, and strengthen relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-primary/5">
        <div className="container max-w-6xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of businesses that use our platform to streamline their operations.
          </p>
          <Button 
            onClick={() => navigate('/signup')} 
            size="lg" 
            className="gap-2"
          >
            Create Your Account
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2023 SalesHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
