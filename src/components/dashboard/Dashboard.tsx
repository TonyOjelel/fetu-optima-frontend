import { motion } from 'framer-motion';

export const Dashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Daily Puzzle Section */}
      <motion.section variants={itemVariants} className="card">
        <h2 className="text-2xl font-bold mb-4">Today's Challenge</h2>
        <div className="bg-primary-50 p-6 rounded-lg">
          <p className="text-lg text-primary-900">
            Solve today's engineering puzzle and climb the leaderboard!
          </p>
          <button className="btn-primary mt-4">Start Puzzle</button>
        </div>
      </motion.section>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="card">
          <h3 className="text-lg font-semibold mb-2">Your Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Puzzles Solved</span>
              <span className="font-bold">42</span>
            </div>
            <div className="flex justify-between">
              <span>Current Streak</span>
              <span className="font-bold">7 days</span>
            </div>
            <div className="flex justify-between">
              <span>Global Rank</span>
              <span className="font-bold">#128</span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="card">
          <h3 className="text-lg font-semibold mb-2">Achievements</h3>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((badge) => (
              <div
                key={badge}
                className="aspect-square rounded-full bg-primary-100 flex items-center justify-center"
              >
                🏆
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="card">
          <h3 className="text-lg font-semibold mb-2">Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Level Progress</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full"
                  style={{ width: '75%' }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>XP to Next Level</span>
                <span>250/1000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full"
                  style={{ width: '25%' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Leaderboard Section */}
      <motion.section variants={itemVariants} className="card">
        <h2 className="text-2xl font-bold mb-4">Global Leaderboard</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((position) => (
            <div
              key={position}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <span className="font-bold text-lg">{position}</span>
                <div className="flex flex-col">
                  <span className="font-semibold">Player {position}</span>
                  <span className="text-sm text-gray-500">
                    Level {20 - position * 2}
                  </span>
                </div>
              </div>
              <span className="font-bold">{1000 - position * 100} pts</span>
            </div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};
