
import React from 'react';
import { 
  BarChart3, 
  ArrowUpCircle, 
  Users, 
  Package, 
  TrendingUp,
  History,
  XCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 2000 },
  { name: 'Apr', sales: 2780 },
  { name: 'May', sales: 1890 },
  { name: 'Jun', sales: 2390 },
];

const recentSales = [
  { id: 1, customer: 'John Doe', product: 'Product A', amount: '$129.99', date: '2 mins ago', status: 'completed' },
  { id: 2, customer: 'Jane Smith', product: 'Product B', amount: '$89.99', date: '15 mins ago', status: 'completed' },
  { id: 3, customer: 'Bob Johnson', product: 'Product C', amount: '$199.99', date: '1 hour ago', status: 'completed' },
  { id: 4, customer: 'Alice Brown', product: 'Product A', amount: '$129.99', date: '3 hours ago', status: 'failed' },
];

const lowStockItems = [
  { id: 1, name: 'Product A', stock: 5, threshold: 10 },
  { id: 2, name: 'Product B', stock: 3, threshold: 15 },
  { id: 3, name: 'Product C', stock: 7, threshold: 10 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground mt-1">
          Overview of your business statistics and recent activities.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="neo-morphism">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
                <h3 className="text-2xl font-bold mt-1">$24,780</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <ArrowUpCircle className="h-3 w-3 mr-1" /> 12% from last month
                </p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neo-morphism">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Customers</p>
                <h3 className="text-2xl font-bold mt-1">573</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <ArrowUpCircle className="h-3 w-3 mr-1" /> 8% from last month
                </p>
              </div>
              <div className="bg-blue-500/10 p-3 rounded-full">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neo-morphism">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Products</p>
                <h3 className="text-2xl font-bold mt-1">128</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <ArrowUpCircle className="h-3 w-3 mr-1" /> 5% from last month
                </p>
              </div>
              <div className="bg-indigo-500/10 p-3 rounded-full">
                <Package className="h-5 w-5 text-indigo-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="neo-morphism">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                <h3 className="text-2xl font-bold mt-1">$16,240</h3>
                <p className="text-xs text-green-500 flex items-center mt-1">
                  <ArrowUpCircle className="h-3 w-3 mr-1" /> 15% from last month
                </p>
              </div>
              <div className="bg-green-500/10 p-3 rounded-full">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="neo-morphism">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>Monthly sales performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="neo-morphism">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Recent Sales</CardTitle>
                <History className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4 px-6">
                {recentSales.map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between py-3 border-b last:border-0">
                    <div className="flex items-center space-x-4">
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">{sale.customer}</p>
                        <p className="text-xs text-muted-foreground">{sale.product}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-medium">{sale.amount}</p>
                      <p className="text-xs text-muted-foreground">{sale.date}</p>
                      {sale.status === 'completed' ? (
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                      ) : (
                        <div className="h-2 w-2 rounded-full bg-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="neo-morphism">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Low Stock Items</CardTitle>
                <XCircle className="h-4 w-4 text-red-500" />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-4 px-6">
                {lowStockItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 border-b last:border-0">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Threshold: {item.threshold}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                        {item.stock} left
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
