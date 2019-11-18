export default (context) => {
    const { isServer } = context
    if(!isServer) {
        const themeConfig = context.siteData.themeConfig;
        const currentColorationConfig = themeConfig.colouration[themeConfig.activeColouration];
        Object.entries(currentColorationConfig).forEach(colorationPropEntry => {
            document.documentElement.style.setProperty(`--${colorationPropEntry[0]}`, colorationPropEntry[1]);
        });
        console.log('context:', context, currentColorationConfig)
    }
};
