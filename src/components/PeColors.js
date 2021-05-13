const theme = 'normal';

const ThemeColors = {
    normal: {
        backgroundPrimary: '#050934',
        backgroundSecondary: '#0B1043',
        backgroundCard: '#1A2060',
        backgroundCardMuted: '#272E77',
        

        buttonPrimary: '#0F4AC0',
        buttonOutlined: '#555C99',
        buttonPrimaryDisabled: '#57647E',
        buttonOutlinedDisabled: '#22243A',

        textPrimary: '#ffffff',
        textSecondary: '#555C99',
        textParagraph: '#C4C4C4',
        textMuted: '#878787',     
        
        textButtonPrimary: '#ffffff',   
        textButtonOutlined: '#555C99',
        textButtonLink: '#44A2E1',
        textButtonPrimaryDisabled: '#A4ADBF',   
        textButtonOutlinedDisabled: '#22243A',
        textButtonLinkDisabled: '#22243A',
        textError: '#ffbbbb',

        inputBackground: '#3A3E64',
        inputBackgroundDisabled: '#3A3E6499',
        inputPlaceHolder: '#666B9588',
        inputText: '#CFCECE',
        inputLabel: '#666B95',

        accentPrimary: '#44A2E1',
        accentSecondary: '#41CB2D',
        accentTerciary: '#F1C40F',

        line: '#2A325699'
        
    },
    contrast: {
        backgroundPrimary: '#050934',
        backgroundSecondary: '#0B1043',
        backgroundCard: '#1A2060',
        backgroundCardMuted: '#272E77',
        

        buttonPrimary: '#0F4AC0',
        buttonOutlined: '#44A2E1',
        buttonPrimaryDisabled: '#57647E',
        buttonOutlinedDisabled: '#22243A',

        textPrimary: '#ffffff',
        textSecondary: '#555C99',
        textParagraph: '#C4C4C4',
        textMuted: '#878787',     
        
        textButtonPrimary: '#ffffff',   
        textButtonOutlined: '#44A2E1',
        textButtonLink: '#44A2E1',
        textButtonPrimaryDisabled: '#A4ADBF',   
        textButtonOutlinedDisabled: '#22243A',
        textButtonLinkDisabled: '#22243A',
        textError: '#ffbbbb',

        inputBackground: '#3A3E64',

        inputPlaceHolder: '#666B9588',
        inputText: '#CFCECE',
        inputLabel: '#666B95',

        accentPrimary: '#44A2E1',
        accentSecondary: '#41CB2D',
        accentTerciary: '#F1C40F',

        line: '#2A325699'
    }
    
}

const PeColors = theme == 'normal'? ThemeColors.normal : ThemeColors.contrast;

export default PeColors;
