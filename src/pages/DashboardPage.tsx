import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar'; // Custom Sidebar
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Link } from 'react-router-dom';
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react';


const DashboardPage: React.FC = () => {
  useEffect(() => {
    console.log('DashboardPage loaded');
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 border-t">
        <Sidebar className="w-64" /> {/* Custom Sidebar */}
        <ScrollArea className="flex-1">
          <main className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <Button>Create New Item</Button>
            </div>
            
            {/* Example NavigationMenu as requested */}
            <div className="mb-4">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                        <Link to="/dashboard/overview" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Overview
                            </NavigationMenuLink>
                        </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                        <Link to="/dashboard/analytics" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Analytics
                            </NavigationMenuLink>
                        </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                        <Link to="/dashboard/settings" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Settings
                            </NavigationMenuLink>
                        </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>


            {/* Placeholder content cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">+19% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">+201 since last hour</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>An overview of recent events in your application.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Placeholder for a list of recent activities or a chart.</p>
                <img src="https://placehold.co/600x300?text=Activity+Chart+Placeholder" alt="Activity chart placeholder" className="mt-4 rounded-md" />
              </CardContent>
            </Card>
          </main>
        </ScrollArea>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;