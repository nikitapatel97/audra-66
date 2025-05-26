
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Users, Flame, Plus } from "lucide-react";

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

export const SocialDashboard = () => {
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
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 font-playfair">
            Your{" "}
            <span className="italic text-gray-600 font-playfair">
              community
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-crimson italic">
            Share your journey with close friends and find support in your growth.
          </p>
        </div>

        <div className="space-y-4">
          {/* Add Friends Button */}
          <Card className="border-dashed border-gray-200">
            <CardContent className="p-4 text-center">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-700 font-crimson">
                <Plus className="w-4 h-4 mr-2" />
                Add Friends
              </Button>
              <p className="text-xs text-gray-500 mt-1 font-crimson italic">Invite trusted friends to share your growth journey</p>
            </CardContent>
          </Card>

          {/* Feed Posts */}
          <div className="space-y-4">
            {feedPosts.map((post) => (
              <Card key={post.id} className="border border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-8 h-8 flex-shrink-0">
                      <AvatarFallback className="bg-gray-600 text-white text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-sm text-gray-900 font-crimson">{post.author}</span>
                        {post.type === "streak" && <Flame className="w-3 h-3 text-orange-500" />}
                        <span className="text-xs text-gray-500 font-crimson">{formatTimeAgo(post.timestamp)}</span>
                      </div>
                      
                      <p className="text-sm text-gray-700 mb-3 font-crimson italic">{post.content}</p>
                      
                      <div className="flex items-center gap-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleLike(post.id)}
                          className={`h-auto p-1 ${post.isLiked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 font-crimson`}
                        >
                          <Heart className={`w-4 h-4 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                          <span className="text-xs">{post.likes}</span>
                        </Button>
                        
                        <Button variant="ghost" size="sm" className="h-auto p-1 text-gray-500 hover:text-gray-600 font-crimson">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          <span className="text-xs">{post.comments}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Share Your Own Update */}
          <Card className="border border-gray-200 bg-gray-50">
            <CardContent className="p-4 text-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white font-crimson">
                <Users className="w-4 h-4 mr-2" />
                Share Your Progress
              </Button>
              <p className="text-xs text-gray-600 mt-2 font-crimson italic">Celebrate your milestones with friends</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
