
import React, { useState } from 'react';
import { 
  MoreVertical, 
  Plus, 
  Search, 
  Filter, 
  ArrowUpDown, 
  Edit, 
  FileText,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Mock data
const salesData = [
  { 
    id: 'ORD-001', 
    customer: 'John Doe', 
    date: '2023-06-15', 
    total: '$129.99', 
    status: 'Completed',
    payment: 'Credit Card',
    items: 3
  },
  { 
    id: 'ORD-002', 
    customer: 'Jane Smith', 
    date: '2023-06-14', 
    total: '$89.99', 
    status: 'Completed',
    payment: 'PayPal',
    items: 1
  },
  { 
    id: 'ORD-003', 
    customer: 'Bob Johnson', 
    date: '2023-06-14', 
    total: '$199.99', 
    status: 'Processing',
    payment: 'Credit Card',
    items: 2
  },
  { 
    id: 'ORD-004', 
    customer: 'Alice Brown', 
    date: '2023-06-13', 
    total: '$129.99', 
    status: 'Cancelled',
    payment: 'PayPal',
    items: 3
  },
  { 
    id: 'ORD-005', 
    customer: 'Charlie Davis', 
    date: '2023-06-12', 
    total: '$45.99', 
    status: 'Completed',
    payment: 'Cash',
    items: 1
  },
  { 
    id: 'ORD-006', 
    customer: 'Eva Wilson', 
    date: '2023-06-12', 
    total: '$87.50', 
    status: 'Processing',
    payment: 'Credit Card',
    items: 2
  },
  { 
    id: 'ORD-007', 
    customer: 'Frank Miller', 
    date: '2023-06-11', 
    total: '$112.75', 
    status: 'Completed',
    payment: 'PayPal',
    items: 4
  },
  { 
    id: 'ORD-008', 
    customer: 'Grace Taylor', 
    date: '2023-06-10', 
    total: '$67.25', 
    status: 'Completed',
    payment: 'Credit Card',
    items: 1
  },
];

const SalesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(salesData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    const filtered = salesData.filter(sale => 
      sale.id.toLowerCase().includes(term.toLowerCase()) ||
      sale.customer.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredData(filtered);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Completed':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Completed
          </Badge>
        );
      case 'Processing':
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Processing
          </Badge>
        );
      case 'Cancelled':
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 flex items-center gap-1">
            <XCircle className="h-3 w-3" />
            Cancelled
          </Badge>
        );
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Sales</h2>
          <p className="text-muted-foreground mt-1">
            Manage your orders and transactions
          </p>
        </div>
        <Button className="h-10 gap-1">
          <Plus className="h-4 w-4" />
          New Sale
        </Button>
      </div>
      
      <Card className="neo-morphism">
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Recent Orders</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search orders..."
                  className="w-full pl-9 h-10 md:w-[240px]"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Order ID
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Customer
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Date
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Payment
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Total
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((sale) => (
                  <tr 
                    key={sale.id} 
                    className="border-b last:border-0 bg-white hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {sale.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {sale.customer}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {sale.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(sale.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {sale.payment}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground font-medium">
                      {sale.total}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-36">
                          <DropdownMenuItem className="cursor-pointer">
                            <FileText className="h-4 w-4 mr-2" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesList;
