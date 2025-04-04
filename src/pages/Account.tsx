
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, 
  Package, 
  CreditCard, 
  Heart, 
  Settings, 
  LogOut, 
  Edit, 
  CheckCircle, 
  Clock,
  Truck,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

// Mock order data
const orderHistory = [
  {
    id: 'ORD-123456',
    date: '2023-07-15',
    total: 149.99,
    status: 'Delivered',
    items: [
      { id: 'p1', name: 'Wireless Headphones', price: 149.99, quantity: 1 }
    ]
  },
  {
    id: 'ORD-789012',
    date: '2023-06-28',
    total: 279.97,
    status: 'Processing',
    items: [
      { id: 'p2', name: 'Smart Watch', price: 129.99, quantity: 1 },
      { id: 'p3', name: 'Bluetooth Speaker', price: 79.99, quantity: 1 },
      { id: 'p4', name: 'Phone Charger', price: 69.99, quantity: 1 }
    ]
  }
];

// Mock address data
const addresses = [
  {
    id: 'addr1',
    name: 'Home',
    street: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'USA',
    isDefault: true
  },
  {
    id: 'addr2',
    name: 'Work',
    street: '456 Office Avenue',
    city: 'New York',
    state: 'NY',
    zip: '10002',
    country: 'USA',
    isDefault: false
  }
];

// Mock payment methods
const paymentMethods = [
  {
    id: 'pm1',
    type: 'Visa',
    last4: '4242',
    expiry: '05/2025',
    isDefault: true
  },
  {
    id: 'pm2',
    type: 'Mastercard',
    last4: '5555',
    expiry: '08/2024',
    isDefault: false
  }
];

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Order status badge component
  const OrderStatusBadge = ({ status }) => {
    let bgColor = 'bg-gray-400';
    let textColor = 'text-white';
    let icon = <Clock size={14} />;
    
    if (status === 'Delivered') {
      bgColor = 'bg-green-500';
      icon = <CheckCircle size={14} />;
    } else if (status === 'Processing') {
      bgColor = 'bg-blue-500';
      icon = <Package size={14} />;
    } else if (status === 'Shipped') {
      bgColor = 'bg-purple-500';
      icon = <Truck size={14} />;
    }
    
    return (
      <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${bgColor} ${textColor} text-xs`}>
        {icon}
        <span>{status}</span>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">My Account</h1>
          
          <div className="glass rounded-xl overflow-hidden">
            <Tabs 
              defaultValue={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row">
                {/* Sidebar Navigation */}
                <div className="md:w-64 border-r border-white/10">
                  <div className="p-6 text-center border-b border-white/10">
                    <div className="w-20 h-20 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <User size={32} className="text-neon-purple" />
                    </div>
                    <h2 className="font-semibold">John Doe</h2>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                  
                  <TabsList className="flex flex-col w-full rounded-none bg-transparent">
                    <TabsTrigger 
                      value="profile" 
                      className="justify-start px-6 py-3 data-[state=active]:bg-white/10 data-[state=active]:text-neon-purple rounded-none border-b border-white/5"
                    >
                      <User size={18} className="mr-2" />
                      Profile
                    </TabsTrigger>
                    <TabsTrigger 
                      value="orders" 
                      className="justify-start px-6 py-3 data-[state=active]:bg-white/10 data-[state=active]:text-neon-purple rounded-none border-b border-white/5"
                    >
                      <Package size={18} className="mr-2" />
                      Orders
                    </TabsTrigger>
                    <TabsTrigger 
                      value="addresses" 
                      className="justify-start px-6 py-3 data-[state=active]:bg-white/10 data-[state=active]:text-neon-purple rounded-none border-b border-white/5"
                    >
                      <MapPin size={18} className="mr-2" />
                      Addresses
                    </TabsTrigger>
                    <TabsTrigger 
                      value="payment" 
                      className="justify-start px-6 py-3 data-[state=active]:bg-white/10 data-[state=active]:text-neon-purple rounded-none border-b border-white/5"
                    >
                      <CreditCard size={18} className="mr-2" />
                      Payment Methods
                    </TabsTrigger>
                    <TabsTrigger 
                      value="wishlist" 
                      className="justify-start px-6 py-3 data-[state=active]:bg-white/10 data-[state=active]:text-neon-purple rounded-none border-b border-white/5"
                    >
                      <Heart size={18} className="mr-2" />
                      Wishlist
                    </TabsTrigger>
                    <TabsTrigger 
                      value="settings" 
                      className="justify-start px-6 py-3 data-[state=active]:bg-white/10 data-[state=active]:text-neon-purple rounded-none border-b border-white/5"
                    >
                      <Settings size={18} className="mr-2" />
                      Settings
                    </TabsTrigger>
                    <div className="px-6 py-3 text-rose-500 flex items-center cursor-pointer hover:bg-white/5 transition-colors">
                      <LogOut size={18} className="mr-2" />
                      Logout
                    </div>
                  </TabsList>
                </div>
                
                {/* Main Content Area */}
                <div className="flex-1 p-6">
                  {/* Profile Tab */}
                  <TabsContent value="profile" className="mt-0">
                    <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" defaultValue="john.doe@example.com" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="(555) 123-4567" className="mt-1" />
                      </div>
                    </div>
                    
                    <Separator className="my-6" />
                    
                    <h3 className="text-xl font-semibold mb-4">Password</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input id="currentPassword" type="password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input id="confirmPassword" type="password" className="mt-1" />
                      </div>
                    </div>
                    
                    <Button className="rounded-full px-8 bg-gradient-to-r from-neon-purple to-neon-teal">
                      Save Changes
                    </Button>
                  </TabsContent>
                  
                  {/* Orders Tab */}
                  <TabsContent value="orders" className="mt-0">
                    <h3 className="text-xl font-semibold mb-4">Order History</h3>
                    
                    <div className="space-y-6">
                      {orderHistory.map((order) => (
                        <div key={order.id} className="glass rounded-lg overflow-hidden">
                          <div className="p-4 flex justify-between items-center border-b border-white/10">
                            <div>
                              <p className="font-semibold">{order.id}</p>
                              <p className="text-sm text-muted-foreground">
                                Placed on {new Date(order.date).toLocaleDateString()}
                              </p>
                            </div>
                            <OrderStatusBadge status={order.status} />
                          </div>
                          
                          <div className="p-4">
                            {order.items.map((item) => (
                              <div key={item.id} className="flex justify-between py-2 border-b border-white/5 last:border-0">
                                <div>
                                  <p>{item.name}</p>
                                  <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                                </div>
                                <p>${item.price.toFixed(2)}</p>
                              </div>
                            ))}
                          </div>
                          
                          <div className="p-4 bg-white/5 flex justify-between items-center">
                            <p className="font-semibold">Total</p>
                            <p className="font-semibold">${order.total.toFixed(2)}</p>
                          </div>
                          
                          <div className="p-4 flex gap-2 justify-end">
                            <Button 
                              variant="outline" 
                              className="text-sm rounded-full"
                              asChild
                            >
                              <Link to={`/order/${order.id}`}>
                                View Details
                              </Link>
                            </Button>
                            <Button 
                              className="text-sm rounded-full"
                              asChild
                            >
                              <Link to="/products">
                                Buy Again
                              </Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Addresses Tab */}
                  <TabsContent value="addresses" className="mt-0">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">Saved Addresses</h3>
                      <Button size="sm" className="rounded-full">
                        Add New Address
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {addresses.map((address) => (
                        <div key={address.id} className="glass rounded-lg p-4 relative">
                          {address.isDefault && (
                            <div className="absolute top-2 right-2 text-xs bg-neon-purple text-white px-2 py-1 rounded-full">
                              Default
                            </div>
                          )}
                          <h4 className="font-semibold">{address.name}</h4>
                          <p className="text-sm">{address.street}</p>
                          <p className="text-sm">{address.city}, {address.state} {address.zip}</p>
                          <p className="text-sm">{address.country}</p>
                          
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" variant="outline" className="rounded-full">
                              <Edit size={14} className="mr-1" />
                              Edit
                            </Button>
                            {!address.isDefault && (
                              <Button size="sm" variant="outline" className="rounded-full">
                                Set as Default
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Payment Methods Tab */}
                  <TabsContent value="payment" className="mt-0">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">Payment Methods</h3>
                      <Button size="sm" className="rounded-full">
                        Add New Card
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="glass rounded-lg p-4 relative">
                          {method.isDefault && (
                            <div className="absolute top-2 right-2 text-xs bg-neon-purple text-white px-2 py-1 rounded-full">
                              Default
                            </div>
                          )}
                          <div className="flex items-center mb-2">
                            <div className="w-10 h-6 bg-white/10 rounded flex items-center justify-center text-xs mr-2">
                              {method.type.charAt(0)}
                            </div>
                            <h4 className="font-semibold">
                              {method.type} ending in {method.last4}
                            </h4>
                          </div>
                          <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                          
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" variant="outline" className="rounded-full">
                              <Edit size={14} className="mr-1" />
                              Edit
                            </Button>
                            {!method.isDefault && (
                              <Button size="sm" variant="outline" className="rounded-full">
                                Set as Default
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Wishlist Tab */}
                  <TabsContent value="wishlist" className="mt-0">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold">My Wishlist</h3>
                      <Button size="sm" className="rounded-full" asChild>
                        <Link to="/wishlist">
                          View Full Wishlist
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="text-center p-8">
                      <Heart size={48} className="mx-auto mb-4 text-rose-500 opacity-20" />
                      <h4 className="text-lg font-medium mb-2">View your saved items</h4>
                      <p className="text-muted-foreground mb-4">
                        Go to your wishlist to see saved products and add them to your cart
                      </p>
                      <Button className="rounded-full" asChild>
                        <Link to="/wishlist">
                          Go to Wishlist
                        </Link>
                      </Button>
                    </div>
                  </TabsContent>
                  
                  {/* Settings Tab */}
                  <TabsContent value="settings" className="mt-0">
                    <h3 className="text-xl font-semibold mb-4">Account Settings</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium mb-2">Email Preferences</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="orderUpdates" 
                              defaultChecked 
                              className="mr-2"
                            />
                            <label htmlFor="orderUpdates">Order updates</label>
                          </div>
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="promotions" 
                              defaultChecked 
                              className="mr-2"
                            />
                            <label htmlFor="promotions">Promotions and deals</label>
                          </div>
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="productNews" 
                              defaultChecked 
                              className="mr-2"
                            />
                            <label htmlFor="productNews">New product announcements</label>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-medium mb-2">Privacy Settings</h4>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="dataAnalysis" 
                              defaultChecked 
                              className="mr-2"
                            />
                            <label htmlFor="dataAnalysis">Allow data analysis to improve experience</label>
                          </div>
                          <div className="flex items-center">
                            <input 
                              type="checkbox" 
                              id="thirdParty" 
                              className="mr-2"
                            />
                            <label htmlFor="thirdParty">Share data with third parties</label>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-medium mb-2">Account Actions</h4>
                        <div className="space-y-3">
                          <Button variant="outline" className="text-amber-500 border-amber-500/20 hover:bg-amber-500/10 w-full justify-start">
                            Download my data
                          </Button>
                          <Button variant="outline" className="text-rose-500 border-rose-500/20 hover:bg-rose-500/10 w-full justify-start">
                            Delete my account
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="rounded-full px-8 bg-gradient-to-r from-neon-purple to-neon-teal">
                        Save Settings
                      </Button>
                    </div>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Account;
