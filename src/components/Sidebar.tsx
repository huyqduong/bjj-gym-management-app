import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Users, ShoppingBag, Calendar, Award, BarChart3, Settings, Clock, BookOpen, DollarSign, Trophy, UserPlus, Menu, X } from 'lucide-react';
import { cn } from '../utils/cn';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-gray-900 flex items-center lg:hidden z-40 px-4">
        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-800 rounded-lg"
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
        <div className="ml-4">
          <h1 className="text-xl font-bold text-white">HEVA BJJ</h1>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-gray-900 text-white",
        "transform transition-transform duration-200 ease-in-out lg:translate-x-0",
        "flex flex-col flex-shrink-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          <div className="p-4 hidden lg:block">
            <h1 className="text-2xl font-bold text-white">HEVA BJJ</h1>
            <p className="text-gray-400 text-sm">Management System</p>
          </div>
          
          <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
            <SidebarLink to="/dashboard" icon={<BarChart3 />} text="Dashboard" onClick={toggleSidebar} />
            <SidebarLink to="/prospects" icon={<UserPlus />} text="Prospects" onClick={toggleSidebar} />
            <SidebarLink to="/members" icon={<Users />} text="Members" onClick={toggleSidebar} />
            <SidebarLink to="/inventory" icon={<ShoppingBag />} text="Inventory" onClick={toggleSidebar} />
            <SidebarLink to="/attendance" icon={<Calendar />} text="Attendance" onClick={toggleSidebar} />
            <SidebarLink to="/schedule" icon={<Clock />} text="Class Schedule" onClick={toggleSidebar} />
            <SidebarLink to="/promotions" icon={<Award />} text="Promotions" onClick={toggleSidebar} />
            <SidebarLink to="/curriculum" icon={<BookOpen />} text="Curriculum" onClick={toggleSidebar} />
            <SidebarLink to="/finances" icon={<DollarSign />} text="Finances" onClick={toggleSidebar} />
            <SidebarLink to="/tournament-records" icon={<Trophy />} text="Tournament Records" onClick={toggleSidebar} />
            <SidebarLink to="/settings" icon={<Settings />} text="Settings" onClick={toggleSidebar} />
          </nav>
        </div>
      </aside>
    </>
  );
};

const SidebarLink = ({ 
  icon, 
  text, 
  to, 
  onClick 
}: { 
  icon: React.ReactNode; 
  text: string; 
  to: string;
  onClick?: () => void;
}) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
          isActive ? "bg-indigo-600 text-white" : "text-gray-300 hover:bg-gray-800"
        )
      }
    >
      {icon}
      <span>{text}</span>
    </NavLink>
  );
};

export default Sidebar;