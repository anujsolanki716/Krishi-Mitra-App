
import React, { useState, useContext } from 'react';
import { ForumPost, VideoTutorial } from '../../types';
import Card from '../Card';
import { mockForumPosts, mockVideoTutorials } from '../../services/mockDataService';
import { AppContext } from '../../AppContext';
import { TEXTS } from '../../constants';
import { ChatBubbleLeftEllipsisIcon, PlayCircleIcon, PencilSquareIcon, UserGroupIcon } from '../Icons'; // Assuming Icons.tsx exists

const ForumPostCard: React.FC<{ post: ForumPost }> = ({ post }) => (
  <Card className="mb-4 hover:shadow-lg transition-shadow">
    <h4 className="text-lg font-semibold text-primary dark:text-green-400 mb-1">{post.title}</h4>
    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">By: {post.author} on {post.timestamp}</p>
    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{post.content}</p>
    <a href="#" className="text-sm text-accent dark:text-blue-400 hover:underline mt-2 inline-block">Read more &raquo;</a>
  </Card>
);

const VideoTutorialCard: React.FC<{ tutorial: VideoTutorial }> = ({ tutorial }) => (
  <Card className="w-64 flex-shrink-0 snap-start hover:shadow-xl transition-shadow">
    <img src={tutorial.thumbnailUrl} alt={tutorial.title} className="w-full h-32 object-cover rounded-t-lg" />
    <div className="p-3">
      <h4 className="text-md font-semibold text-primary dark:text-green-400 mb-1 truncate" title={tutorial.title}>{tutorial.title}</h4>
      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{tutorial.description}</p>
      <a 
        href={tutorial.videoUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-sm text-accent dark:text-blue-400 hover:underline mt-2 inline-flex items-center"
      >
        <PlayCircleIcon className="w-4 h-4 mr-1"/> Watch Video
      </a>
    </div>
  </Card>
);


const CommunityPage: React.FC = () => {
  const [forumPosts] = useState<ForumPost[]>(mockForumPosts);
  const [videoTutorials] = useState<VideoTutorial[]>(mockVideoTutorials);
  
  const context = useContext(AppContext);
  const lang = context?.language || 'en';
  const texts = TEXTS[lang];


  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-3">
        <UserGroupIcon className="w-10 h-10 text-primary dark:text-green-400" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{texts.communityTitle}</h1>
      </div>
      
      <section>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 flex items-center">
                <ChatBubbleLeftEllipsisIcon className="w-7 h-7 mr-2 text-purple-500 dark:text-purple-400"/>
                Forum Discussions
            </h2>
            <button className="bg-purple-500 hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center transition-colors">
                <PencilSquareIcon className="w-5 h-5 mr-2"/> Start New Discussion
            </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {forumPosts.slice(0, 4).map(post => <ForumPostCard key={post.id} post={post} />)}
        </div>
        {forumPosts.length > 4 && <a href="#" className="text-accent dark:text-blue-400 hover:underline mt-4 inline-block">View all discussions &raquo;</a>}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200 flex items-center">
            <PlayCircleIcon className="w-7 h-7 mr-2 text-red-500 dark:text-red-400"/>
            Video Tutorials
        </h2>
        <div className="flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory">
          {videoTutorials.map(tutorial => <VideoTutorialCard key={tutorial.id} tutorial={tutorial} />)}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-200">Success Stories</h2>
        <Card className="bg-yellow-50 dark:bg-yellow-900">
          <p className="italic text-yellow-700 dark:text-yellow-300">"Using the crop advisory and market linkage features, I was able to increase my profits by 20% this season!" - Ramesh Kumar, Haryana</p>
          <a href="#" className="text-sm text-yellow-600 dark:text-yellow-400 hover:underline mt-2 inline-block">Read more success stories &raquo;</a>
        </Card>
      </section>
    </div>
  );
};

export default CommunityPage;
    