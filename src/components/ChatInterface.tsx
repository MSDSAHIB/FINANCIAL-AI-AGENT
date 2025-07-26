import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Send, ArrowLeft, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatInterface = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your AI Financial Advisor. I can help you with taxes, loans, investments, financial planning, and more. What financial question can I help you with today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('tax')) {
      return "I can help you with tax optimization! Here are some key strategies:\n\n• **Maximize deductions**: Consider itemizing if it exceeds the standard deduction\n• **Retirement contributions**: Max out 401(k) and IRA contributions\n• **Tax-loss harvesting**: Offset gains with losses in your investment portfolio\n• **HSA contributions**: Triple tax advantage for health savings\n\nWhat specific tax situation would you like me to analyze?";
    }
    
    if (lowerMessage.includes('invest')) {
      return "Great question about investing! Here's a strategic approach:\n\n• **Diversification**: Spread investments across asset classes\n• **Emergency fund first**: 3-6 months of expenses in high-yield savings\n• **Low-cost index funds**: Broad market exposure with minimal fees\n• **Dollar-cost averaging**: Regular investments regardless of market conditions\n• **Rebalancing**: Maintain your target allocation quarterly\n\nWhat's your investment timeline and risk tolerance?";
    }
    
    if (lowerMessage.includes('loan') || lowerMessage.includes('debt')) {
      return "Let me help you tackle debt strategically:\n\n• **List all debts**: Include balances, rates, and minimum payments\n• **Avalanche method**: Pay minimums on all, extra on highest rate\n• **Snowball method**: Pay minimums on all, extra on smallest balance\n• **Consolidation**: Consider if you can get a lower rate\n• **Refinancing**: Especially for mortgages and student loans\n\nWhat types of loans are you currently managing?";
    }
    
    if (lowerMessage.includes('budget') || lowerMessage.includes('money')) {
      return "Budgeting is the foundation of financial success! Here's my recommended approach:\n\n• **50/30/20 Rule**: 50% needs, 30% wants, 20% savings/debt\n• **Track everything**: Use apps or spreadsheets for 30 days\n• **Automate savings**: Pay yourself first\n• **Review monthly**: Adjust categories based on actual spending\n• **Build emergency fund**: Start with $1,000, then 3-6 months expenses\n\nWould you like help creating a personalized budget?";
    }
    
    return "Thank you for your question! I specialize in comprehensive financial advice including:\n\n• **Tax Planning & Optimization**\n• **Investment Strategy & Portfolio Management**\n• **Debt Management & Loan Optimization**\n• **Budgeting & Financial Planning**\n• **Retirement Planning**\n• **Risk Assessment & Insurance**\n\nCould you provide more details about your specific financial situation so I can give you personalized advice?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: simulateAIResponse(inputValue),
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate('/')}
                className="hover:bg-primary/10"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div className="flex items-center space-x-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <span className="font-semibold">FinanceAI Pro</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              AI Online
            </div>
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-3xl ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-accent text-accent-foreground'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4" />
                    ) : (
                      <Bot className="h-4 w-4" />
                    )}
                  </div>
                  <Card className={`p-4 ${
                    message.sender === 'user' 
                      ? 'bg-primary text-primary-foreground border-primary/20' 
                      : 'bg-gradient-card border-border/50'
                  }`}>
                    <div className="space-y-2">
                      <div className="whitespace-pre-wrap text-sm leading-relaxed">
                        {message.content}
                      </div>
                      <div className={`text-xs ${
                        message.sender === 'user' 
                          ? 'text-primary-foreground/70' 
                          : 'text-muted-foreground'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-3xl">
                  <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <Card className="p-4 bg-gradient-card border-border/50">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </Card>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-border/40 backdrop-blur-md p-4">
            <div className="flex space-x-4">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about taxes, investments, loans, budgeting..."
                className="flex-1 bg-background/50 backdrop-blur-sm border-border/50"
                disabled={isTyping}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                variant="hero"
                size="icon"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;