class CryptoTalksPlatform {
    constructor(platformName) {
      this.platformName = platformName;
      this.discussions = [];
      this.users = [];
    }
  
    createDiscussion(topic, creator) {
      const discussion = {
        topic: topic,
        creator: creator,
        messages: [],
      };
      this.discussions.push(discussion);
      console.log(`New discussion on "${topic}" created by ${creator}.`);
    }
  
    addUser(userName) {
      this.users.push(userName);
      console.log(`${userName} has joined ${this.platformName}.`);
    }
  
    postMessage(discussionIndex, userName, message) {
      if (discussionIndex < this.discussions.length) {
        const discussion = this.discussions[discussionIndex];
        discussion.messages.push({ user: userName, message: message });
        console.log(`${userName} posted in the discussion "${discussion.topic}": ${message}`);
      } else {
        console.log('Invalid discussion index.');
      }
    }
  
    displayPlatformInfo() {
      console.log(`
        ${this.platformName} Platform Information:
        Discussions: ${this.discussions.length}
        Users: ${this.users.join(', ')}
      `);
    }
  }
  
  // Пример использования
  const cryptoTalks = new CryptoTalksPlatform('CryptoTalks');
  
  cryptoTalks.createDiscussion('Bitcoin Price Predictions', 'Alice');
  cryptoTalks.createDiscussion('Ethereum Development Updates', 'Bob');
  cryptoTalks.addUser('Charlie');
  cryptoTalks.postMessage(0, 'Charlie', 'What are your thoughts on the current Bitcoin price?');
  cryptoTalks.displayPlatformInfo();
  