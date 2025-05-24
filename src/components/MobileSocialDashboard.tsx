
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Users, Flame, Plus, Share2 } from "lucide-react";

interface FeedPost {
  id: number;
  author: string;
  content: string;
  type: "streak" | "milestone" | "insight";
  timestamp: Date;
  likes: number;
  comments: number;
  isLiked: boolean;
}

export const MobileSocialDashboard = () => {
  const [feedPosts, setFeedPosts] = useState<FeedPost[]>([
    {
      id: 1,
      author: "Sarah M.",
      content: "Just hit 20 days of journaling in a row! 🔥 Feeling so much more in tune with my emotions.",
      type: "streak",
      timestamp: new Date(Date.now() - 300000),
      likes: 12,
      comments: 3,
      isLiked: false,
    },
    {
      id: 2,
      author: "Alex K.",
      content: "Had a breakthrough moment today writing about boundaries. Sometimes the hardest conversations lead to the biggest growth 💜",
      type: "insight",
      timestamp: new Date(Date.now() - 900000),
      likes: 8,
      comments: 5,
      isLiked: true,
    },
    {
      id: 3,
      author: "Jamie L.",
      content: "10-day journaling streak! 🔥 Thanks for the inspiration, everyone!",
      type: "streak",
      timestamp: new Date(Date.now() - 1800000),
      likes: 15,
      comments: 2,
      isLiked: false,
    },
  ]);

  const handleLike = (postId: number) => {
    setFeedPosts(posts => 
      posts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
              isLiked: !post.isLiked 
            }
          : post
      )
    );
  };

  const formatTimeAgo = (timestamp: Date) => {
    const minutes = Math.floor((Date.now() - timestamp.getTime()) / 60000);
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h`;
    const days = Math.floor(hours / 24);
    return `${days}d`;
  };

  return (
    <div className="space-y-3">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Community</h2>
        <p className="text-sm text-gray-600">Share your journey with close friends</p>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 mb-4">
        <Button variant="outline" size="sm" className="flex-1 text-xs">
          <Plus className="w-3 h-3 mr-1" />
          Add Friends
        </Button>
        <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-xs">
          <Share2 className="w-3 h-3 mr-1" />
          Share Update
        </Button>
      </div>

      {/* Feed Posts */}
      <div className="space-y-3">
        {feedPosts.map((post) => (
          <Card key={post.id} className="border border-purple-100">
            <CardContent className="p-3">
              <div className="flex items-start gap-2">
                <Avatar className="w-7 h-7 flex-shrink-0">
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-medium text-xs text-gray-900">{post.author}</span>
                    {post.type === "streak" && <Flame className="w-3 h-3 text-orange-500" />}
                    <span className="text-xs text-gray-500 ml-auto">{formatTimeAgo(post.timestamp)}</span>
                  </div>
                  
                  <p className="text-xs text-gray-700 mb-2 leading-relaxed">{post.content}</p>
                  
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post.id)}
                      className={`h-auto p-0 ${post.isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
                    >
                      <Heart className={`w-3 h-3 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                      <span className="text-xs">{post.likes}</span>
                    </Button>
                    
                    <Button variant="ghost" size="sm" className="h-auto p-0 text-gray-500 hover:text-purple-600">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      <span className="text-xs">{post.comments}</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
