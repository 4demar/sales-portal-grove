
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignupForm from '@/components/auth/SignupForm';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add a fadeIn animation to the page
    const element = document.getElementById('signup-page');
    if (element) {
      element.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div 
      id="signup-page" 
      className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20"
    >
      <div className="flex-1 flex flex-col justify-center items-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="pl-0 flex items-center gap-2 text-muted-foreground hover:text-foreground"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Button>
            <h1 className="text-center text-2xl font-bold tracking-tight mt-6">SalesHub</h1>
          </div>
          
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
