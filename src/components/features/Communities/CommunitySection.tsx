// src/components/CommunitySection.tsx

import React from "react";
import { communities } from "../Communities/Communities";
import CommunityCard from "./CommunityCard";

const CommunitySection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Community Cards List */}
        <div className="max-w-6xl mx-auto">
          {communities.map((community) => (
            <CommunityCard key={community.id} community={community} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
