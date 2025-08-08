// Pakistan Independence Day Poster Configuration - Mobile First

import { PosterConfig, QuickMessage, PosterStyle } from '@/types/poster';

export const POSTER_CONFIG: PosterConfig = {
  dimensions: {
    width: 600,
    height: 800,
    mobile: {
      width: 350,
      height: 467 // 3:4 ratio for mobile sharing
    },
    desktop: {
      width: 600,
      height: 800
    }
  },
  colors: {
    primary: '#01411C',      // Pakistan green
    secondary: '#FFFFFF',    // White
    accent: '#FFD700',       // Gold for decorative elements
    text: '#212529',         // Dark text for readability
    background: '#F8F9FA'    // Light background
  },
  fonts: {
    heading: 'Georgia, "Times New Roman", serif',
    body: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    decorative: '"Poppins", sans-serif'
  }
};

// Quick messages organized by category for better mobile UX
export const QUICK_MESSAGES: QuickMessage[] = [
  // Patriotic messages
  {
    id: 'proud-pakistani',
    text: 'I am proud to be a Pakistani',
    category: 'patriotic'
  },
  {
    id: 'respect-protect',
    text: 'I will respect and protect the dignity, sovereignty and progress of my country',
    category: 'patriotic'
  },
  {
    id: 'stand-against',
    text: 'I will stand against extremism, hatred and corruption',
    category: 'patriotic'
  },
  {
    id: 'contribute',
    text: 'I will contribute to the development of Pakistan through education, service and honesty',
    category: 'patriotic'
  },
  {
    id: 'one-nation',
    text: 'Pakistan lives in every heart. Let\'s rise as one nation under one flag.',
    category: 'patriotic'
  },
  
  // Personal messages
  {
    id: 'happy-independence',
    text: 'Happy Independence Day, Pakistan!',
    category: 'personal'
  },
  {
    id: 'freedom-blessing',
    text: 'Freedom is a blessing, and Pakistan is our pride.',
    category: 'personal'
  },
  {
    id: 'jashn-mubarak',
    text: 'Jashn-e-Azadi Mubarak ho!',
    category: 'personal'
  },
  {
    id: 'azadi-pride',
    text: 'Azadi ka din hai – let\'s celebrate it with pride!',
    category: 'personal'
  },
  
  // Professional message
  {
    id: 'doctor-pledge',
    text: 'As a doctor, I pledge to serve this nation with compassion, integrity, and care.',
    category: 'medical'
  }
];

// Mobile-optimized character limits
export const CHARACTER_LIMITS = {
  name: {
    max: 20,
    warning: 16 // Show warning at 80%
  },
  designation: {
    max: 25,
    warning: 20
  },
  message: {
    max: 150,
    warning: 120
  }
};

// Canvas rendering settings optimized for mobile
export const CANVAS_SETTINGS = {
  // High DPI support for crisp text on mobile
  pixelRatio: typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 2,
  
  // Mobile performance optimization
  maxCanvasSize: 2048, // Prevent memory issues on mobile
  
  // Image quality settings
  imageQuality: {
    mobile: 0.8,
    desktop: 0.95
  },
  
  // Export formats optimized for mobile sharing
  exportFormats: {
    whatsapp: { width: 350, height: 467 },
    instagram: { width: 1080, height: 1080 },
    story: { width: 1080, height: 1920 },
    facebook: { width: 1200, height: 630 }
  }
};

// Touch interaction settings
export const TOUCH_SETTINGS = {
  minTouchTarget: 44, // iOS/Android minimum
  swipeThreshold: 50,
  tapThreshold: 10,
  longPressDelay: 500
};

// Three Simple Poster Styles
export const POSTER_STYLES: PosterStyle[] = [
  {
    id: 'style1',
    name: 'Style 1',
    description: 'Custom background',
    thumbnail: '1️⃣',
    category: 'modern',
    config: {
      colors: {
        primary: '#FFFFFF', // White text for better contrast on green background
        secondary: '#FFFFFF',
        accent: '#FFD700',
        text: '#FFFFFF', // White text for visibility
        background: '#F8F9FA', // Will be replaced with custom background
        headerGradient: ['#01411C', '#2d5a3d'],
        decorative: 'rgba(255, 255, 255, 0.3)' // White decorative elements
      },
      fonts: {
        heading: 'Georgia, "Times New Roman", serif',
        body: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        decorative: '"Poppins", sans-serif'
      },
      layout: {
        headerHeight: 0, // No header needed, background has title
        profileRadius: 60, // Smaller profile to fit left side
        profileY: 320, // Moved up by 20px for better positioning
        nameY: 420, // 80px gap from profile (consistent)
        designationY: 450, // 30px gap from name (better spacing)
        messageY: 490, // 40px gap from designation (balanced)
        messageHeight: 120 // Message box height
      },
      decorations: {
        backgroundPattern: false, // Custom background will replace pattern
        stars: false, // No stars to keep clean on custom background
        borders: true,
        geometric: false,
        traditional: false
      }
    }
  },
  {
    id: 'style3',
    name: 'Style 2',
    description: 'Pakistan flag design',
    thumbnail: '2️⃣',
    category: 'artistic',
    config: {
      colors: {
        primary: '#01411C', // Pakistan green to match background
        secondary: '#FFFFFF',
        accent: '#FFD700', // Gold accent
        text: '#1a1a1a', // Dark text for readability on white background
        background: '#FFFFFF', // White background (will be replaced with Background.png)
        headerGradient: ['#01411C', '#2d5a3d'],
        decorative: 'rgba(1, 65, 28, 0.3)' // Green decorative elements
      },
      fonts: {
        heading: '"Playfair Display", serif',
        body: '"Inter", sans-serif',
        decorative: '"Playfair Display", serif'
      },
      layout: {
        headerHeight: 0, // No header needed, background has design
        profileRadius: 65,
        profileY: 180, // Moved up by 20px - positioned higher in white middle area for better balance
        nameY: 300, // Moved down 20px from previous 280
        designationY: 330, // Moved down 20px from previous 310
        messageY: 370, // Moved down 20px from previous 350
        messageHeight: 120
      },
      decorations: {
        backgroundPattern: false, // Remove design lines
        stars: false, // Remove decorative stars
        borders: true,
        geometric: false, // Remove geometric patterns
        traditional: true // Pakistan flag elements in background
      }
    }
  }
];

// Default style (first one)
export const DEFAULT_STYLE = POSTER_STYLES[0];