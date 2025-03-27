
import React, { useState } from 'react';
import { 
  MoreVertical, 
  Plus, 
  Search, 
  Filter, 
  ArrowUpDown, 
  Edit, 
  Trash,
  Mail,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

// Mock data
const customersData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+1 (555) 123-4567', orders: 12, spent: '$1,245.00' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+1 (555) 987-6543', orders: 8, spent: '$876.50' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', phone: '+1 (555) 246-8024', orders: 5, spent: '$530.75' },
  { id: 4, name: 'Alice Brown', email: 'alice.brown@example.com', phone: '+1 (555) 369-8521', orders: 15, spent: '$1,879.25' },
  { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com', phone: '+1 (555) 159-7530', orders: 3, spent: '$245.00' },
  { id: 6, name: 'Eva Wilson', email: 'eva.wilson@example.com', phone: '+1 (555) 753-9510', orders: 7, spent: '$687.50' },
  { id: 7, name: 'Frank Miller', email: 'frank.miller@example.com', phone: '+1 (555) 852-7410', orders: 9, spent: '$923.75' },
  { id: 8, name: 'Grace Taylor', email: 'grace.taylor@example.com', phone: '+1 (555) 741-8520', orders: 4, spent: '$387.25' },
];

const CustomerList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(customersData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    const filtered = customersData.filter(customer => 
      customer.name.toLowerCase().includes(term.toLowerCase()) ||
      customer.email.toLowerCase().includes(term.toLowerCase()) ||
      customer.phone.includes(term)
    );
    
    setFilteredData(filtered);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
          <p className="text-muted-foreground mt-1">
            Manage your customer database
          </p>
        </div>
        <Button className="h-10 gap-1">
          <Plus className="h-4 w-4" />
          Add Customer
        </Button>
      </div>
      
      <Card className="neo-morphism">
        <CardHeader className="pb-3">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Customer Database</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search customers..."
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
                      Customer
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Orders
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center gap-1 cursor-pointer">
                      Total Spent
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((customer) => (
                  <tr 
                    key={customer.id} 
                    className="border-b last:border-0 bg-white hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Avatar className="h-9 w-9">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {getInitials(customer.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <p className="text-sm font-medium">{customer.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Mail className="h-3.5 w-3.5 mr-1.5" />
                          {customer.email}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone className="h-3.5 w-3.5 mr-1.5" />
                          {customer.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {customer.orders}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                      {customer.spent}
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
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                            <Trash className="h-4 w-4 mr-2" />
                            Delete
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

export default CustomerList;
