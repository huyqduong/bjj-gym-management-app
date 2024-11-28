import React from 'react';
import { Users, Baby, GraduationCap, User } from 'lucide-react';
import { StatsGrid, StatCard } from '../ui/Stats';

const MemberStats = () => {
  return (
    <StatsGrid>
      <StatCard
        title="Total Members"
        value="156"
        change="+12% this month"
        icon={<Users className="w-6 h-6 text-indigo-600" />}
      />
      <StatCard
        title="Saplings (3-5 yrs)"
        value="24"
        change="+4 this month"
        icon={<Baby className="w-6 h-6 text-pink-600" />}
      />
      <StatCard
        title="Kids (6-15 yrs)"
        value="48"
        change="+6 this month"
        icon={<GraduationCap className="w-6 h-6 text-blue-600" />}
      />
      <StatCard
        title="Adults (16+ yrs)"
        value="84"
        change="+2 this month"
        icon={<User className="w-6 h-6 text-green-600" />}
      />
    </StatsGrid>
  );
};

export default MemberStats;