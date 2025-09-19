import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    // Clear selection with smooth animation after 150ms
    setTimeout(() => {
      setSelectedItem(null);
    }, 150);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.tabsContainer}>
            <View 
              style={[styles.tab, styles.appleTab, selectedItem === 'Apple' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Apple')}
            >
              <Image 
                source={require('./assets/Apple.png')}
                style={styles.appleIconInTab}
              />
            </View>
            <View 
              style={[styles.tab, activeTab === 'All' ? styles.activeTab : null, selectedItem === 'All' && styles.selectedCard]}
              onTouchStart={() => {
                handleTabPress('All');
                handleItemPress('All');
              }}
            >
              <Text style={activeTab === 'All' ? styles.activeTabText : styles.tabText}>All</Text>
            </View>
            <View 
              style={[styles.tab, activeTab === 'Music' ? styles.activeTab : null, selectedItem === 'Music' && styles.selectedCard]}
              onTouchStart={() => {
                handleTabPress('Music');
                handleItemPress('Music');
              }}
            >
              <Text style={activeTab === 'Music' ? styles.activeTabText : styles.tabText}>Music</Text>
            </View>
            <View 
              style={[styles.tab, activeTab === 'Podcasts' ? styles.activeTab : null, selectedItem === 'Podcasts' && styles.selectedCard]}
              onTouchStart={() => {
                handleTabPress('Podcasts');
                handleItemPress('Podcasts');
              }}
            >
              <Text style={activeTab === 'Podcasts' ? styles.activeTabText : styles.tabText}>Podcasts</Text>
            </View>
            <View 
              style={[styles.tab, activeTab === 'Audiobooks' ? styles.activeTab : null, selectedItem === 'Audiobooks' && styles.selectedCard]}
              onTouchStart={() => {
                handleTabPress('Audiobooks');
                handleItemPress('Audiobooks');
              }}
            >
              <Text style={activeTab === 'Audiobooks' ? styles.activeTabText : styles.tabText}>Audiobooks</Text>
            </View>
          </View>
        </View>

        {/* Music Categories Grid */}
        <View style={styles.categoriesSection}>
          <View style={styles.categoriesGrid}>
            
            <View 
              style={[styles.categoryCard, selectedItem === 'Hot Hits Canada' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Hot Hits Canada')}
            >
              <Image 
                source={require('./assets/Music.jpg')}
                style={styles.categoryIcon}
              />
              <Text style={styles.categoryText}>Hot Hits Canada</Text>
            </View>

            <View 
              style={[styles.categoryCard, selectedItem === 'Pop Favourites' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Pop Favourites')}
            >
              <Image 
                source={require('./assets/Music.jpg')}
                style={styles.categoryIcon}
              />
              <Text style={styles.categoryText}>Pop Favourites</Text>
            </View>

            <View 
              style={[styles.categoryCard, selectedItem === 'Hip-Hop Central' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Hip-Hop Central')}
            >
              <Image 
                source={require('./assets/Music.jpg')}
                style={styles.categoryIcon}
              />
              <Text style={styles.categoryText}>Hip-Hop Central</Text>
            </View>

            <View 
              style={[styles.categoryCard, selectedItem === '80s Hard Rock' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('80s Hard Rock')}
            >
              <Image 
                source={require('./assets/Music.jpg')}
                style={styles.categoryIcon}
              />
              <Text style={styles.categoryText}>80s Hard Rock</Text>
            </View>

            <View 
              style={[styles.categoryCard, selectedItem === 'All About Country' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('All About Country')}
            >
              <Image 
                source={require('./assets/Music.jpg')}
                style={styles.categoryIcon}
              />
              <Text style={styles.categoryText}>All About Country</Text>
            </View>

            <View 
              style={[styles.categoryCard, selectedItem === 'Upbeat Mix' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Upbeat Mix')}
            >
              <Image 
                source={require('./assets/Music.jpg')}
                style={styles.categoryIcon}
              />
              <Text style={styles.categoryText}>Upbeat Mix</Text>
            </View>

            <View 
              style={[styles.categoryCard, selectedItem === 'Daily Wellness' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Daily Wellness')}
            >
              <Image 
                source={require('./assets/Music.jpg')}
                style={styles.categoryIcon}
              />
              <Text style={styles.categoryText}>Daily Wellness</Text>
            </View>

            <View 
              style={[styles.categoryCard, selectedItem === 'Release Radar' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Release Radar')}
            >
              <Image 
                source={require('./assets/Music.jpg')}
                style={styles.categoryIcon}
              />
              <Text style={styles.categoryText}>Release Radar</Text>
            </View>

          </View>
        </View>

        {/* Recents Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recents</Text>
          
          <View style={styles.recentsGrid}>
            
            <View 
              style={[styles.playlistCard, selectedItem === 'Pop Mix' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Pop Mix')}
            >
              <View style={styles.playlistIconContainer}>
                <Image 
                  source={require('./assets/Music.jpg')}
                  style={styles.playlistIcon}
                />
              </View>
              <Text style={styles.playlistName}>Pop Mix</Text>
              <Text style={styles.playlistInfo}>Playlist</Text>
              <Text style={styles.playlistUser}>User 1</Text>
            </View>

            <View 
              style={[styles.playlistCard, selectedItem === 'Hot Hits' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Hot Hits')}
            >
              <View style={styles.playlistIconContainer}>
                <Image 
                  source={require('./assets/Music.jpg')}
                  style={styles.playlistIcon}
                />
              </View>
              <Text style={styles.playlistName}>Hot Hits</Text>
              <Text style={styles.playlistInfo}>Playlist</Text>
              <Text style={styles.playlistUser}>User 1</Text>
            </View>

            <View 
              style={[styles.playlistCard, selectedItem === 'Upbeat Mix' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Upbeat Mix')}
            >
              <View style={styles.playlistIconContainer}>
                <Image 
                  source={require('./assets/Music.jpg')}
                  style={styles.playlistIcon}
                />
              </View>
              <Text style={styles.playlistName}>Upbeat Mix</Text>
              <Text style={styles.playlistInfo}>Playlist</Text>
              <Text style={styles.playlistUser}>User 1</Text>
            </View>

            <View 
              style={[styles.playlistCard, selectedItem === 'Daily Well...' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Daily Well...')}
            >
              <View style={styles.playlistIconContainer}>
                <Image 
                  source={require('./assets/Music.jpg')}
                  style={styles.playlistIcon}
                />
              </View>
              <Text style={styles.playlistName}>Daily Well...</Text>
              <Text style={styles.playlistInfo}>Playlist</Text>
              <Text style={styles.playlistUser}>User 1</Text>
            </View>

            <View 
              style={[styles.playlistCard, selectedItem === 'Hip-Hop C...' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Hip-Hop C...')}
            >
              <View style={styles.playlistIconContainer}>
                <Image 
                  source={require('./assets/Music.jpg')}
                  style={styles.playlistIcon}
                />
              </View>
              <Text style={styles.playlistName}>Hip-Hop C...</Text>
              <Text style={styles.playlistInfo}>Playlist</Text>
              <Text style={styles.playlistUser}>User 1</Text>
            </View>

            <View 
              style={[styles.playlistCard, selectedItem === '80s Hard...' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('80s Hard...')}
            >
              <View style={styles.playlistIconContainer}>
                <Image 
                  source={require('./assets/Music.jpg')}
                  style={styles.playlistIcon}
                />
              </View>
              <Text style={styles.playlistName}>80s Hard...</Text>
              <Text style={styles.playlistInfo}>Playlist</Text>
              <Text style={styles.playlistUser}>User 1</Text>
            </View>

          </View>
        </View>

        {/* Audiobooks Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Audiobooks for you</Text>
          
          <View style={styles.audiobooksGrid}>
            
            <View 
              style={[styles.audiobookCard, selectedItem === 'Mastering Conversation' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Mastering Conversation')}
            >
              <View style={styles.bookCover}>
                <Image 
                  source={require('./assets/audiobook.jpg')}
                  style={styles.recordIcon}
                />
                <Image 
                  source={require('./assets/icon.png')}
                  style={styles.heartIcon}
                />
              </View>
              <Text style={styles.premiumText}>Included in Premium</Text>
              <Text style={styles.bookTitle}>Mastering Conversation Skills</Text>
              <Text style={styles.bookAuthor}>Helen Stone</Text>
            </View>

            <View 
              style={[styles.audiobookCard, selectedItem === 'Control Your Mind' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Control Your Mind')}
            >
              <View style={styles.bookCover}>
                <Image 
                  source={require('./assets/audiobook.jpg')}
                  style={styles.recordIcon}
                />
                <Image 
                  source={require('./assets/icon.png')}
                  style={styles.heartIcon}
                />
              </View>
              <Text style={styles.premiumText}>Included in Premium</Text>
              <Text style={styles.bookTitle}>Control Your Mind and Emotions</Text>
              <Text style={styles.bookAuthor}>Eric Robertson</Text>
            </View>

            <View 
              style={[styles.audiobookCard, selectedItem === 'Ikigai' && styles.selectedCard]}
              onTouchStart={() => handleItemPress('Ikigai')}
            >
              <View style={styles.bookCover}>
                <Image 
                  source={require('./assets/audiobook.jpg')}
                  style={styles.recordIcon}
                />
                <Image 
                  source={require('./assets/icon.png')}
                  style={styles.heartIcon}
                />
              </View>
              <Text style={styles.premiumText}>Included in Premium</Text>
              <Text style={styles.bookTitle}>Ikigai: The Japanese Secret</Text>
              <Text style={styles.bookAuthor}>Hector Garcia</Text>
            </View>

          </View>
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#333333',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  appleTab: {
    width: 40,
    height: 40,
    backgroundColor: '#3B82F6',
    paddingHorizontal: 0,
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  appleIconInTab: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },
  activeTab: {
    backgroundColor: '#00D4AA',
  },
  tabText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  categoriesSection: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  categoryCard: {
    width: '48%',
    backgroundColor: '#333333',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: '#00D4AA',
  },
  categoryIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
    resizeMode: 'contain',
  },
  categoryText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recentsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
  },
  playlistCard: {
    width: '31%',
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  playlistIconContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#60A5FA',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  playlistIcon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  playlistName: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 2,
  },
  playlistInfo: {
    color: '#B3D9FF',
    fontSize: 10,
    textAlign: 'center',
  },
  playlistUser: {
    color: '#B3D9FF',
    fontSize: 10,
    textAlign: 'center',
  },
  audiobooksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  audiobookCard: {
    width: '48%',
    backgroundColor: '#1a1a1a',
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  bookCover: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    marginBottom: 8,
    position: 'relative',
  },
  recordIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  heartIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 8,
    right: 8,
    resizeMode: 'contain',
  },
  premiumText: {
    color: '#00D4AA',
    fontSize: 10,
    marginBottom: 4,
  },
  bookTitle: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 4,
  },
  bookAuthor: {
    color: '#999999',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default App;