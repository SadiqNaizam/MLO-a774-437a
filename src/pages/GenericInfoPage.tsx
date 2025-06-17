import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const GenericInfoPage: React.FC = () => {
  useEffect(() => {
    console.log('GenericInfoPage loaded');
  }, []);

  // Placeholder content - in a real app, this might come from props or CMS
  const pageTitle = "Terms of Service";
  const pageContent = `
    <p class="mb-4">Last updated: ${new Date().toLocaleDateString()}</p>
    <p class="mb-4">Welcome to Our Application! These terms and conditions outline the rules and regulations for the use of Our Application's Website, located at yourdomain.com.</p>
    <p class="mb-4">By accessing this website we assume you accept these terms and conditions. Do not continue to use Our Application if you do not agree to take all of the terms and conditions stated on this page.</p>
    <h3 class="text-xl font-semibold mt-6 mb-2">Cookies</h3>
    <p class="mb-4">We employ the use of cookies. By accessing Our Application, you agreed to use cookies in agreement with the Our Application's Privacy Policy.</p>
    <h3 class="text-xl font-semibold mt-6 mb-2">License</h3>
    <p class="mb-4">Unless otherwise stated, Our Application and/or its licensors own the intellectual property rights for all material on Our Application. All intellectual property rights are reserved. You may access this from Our Application for your own personal use subjected to restrictions set in these terms and conditions.</p>
    <p class="mb-4">You must not:</p>
    <ul class="list-disc list-inside mb-4 ml-4">
      <li>Republish material from Our Application</li>
      <li>Sell, rent or sub-license material from Our Application</li>
      <li>Reproduce, duplicate or copy material from Our Application</li>
      <li>Redistribute content from Our Application</li>
    </ul>
    <p class="mb-4">This Agreement shall begin on the date hereof.</p>
    <h3 class="text-xl font-semibold mt-6 mb-2">Hyperlinking to our Content</h3>
    <p class="mb-4">The following organizations may link to our Website without prior written approval: Government agencies; Search engines; News organizations...</p>
    <p class="text-sm text-muted-foreground mt-8">For any questions regarding these terms, please contact us at support@example.com.</p>
  `;


  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ScrollArea className="h-[calc(100vh-200px)]"> {/* Adjust height as needed */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold flex items-center">
                <FileText className="mr-3 h-8 w-8 text-primary" />
                {pageTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: pageContent }} />
            </CardContent>
          </Card>
        </ScrollArea>
      </main>
      <Footer />
    </div>
  );
};

export default GenericInfoPage;