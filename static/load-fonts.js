WebFontConfig = {
  custom: {
    families: ['KometPro-Regular']
  },
  active: function(){
    console.log('font loaded');
  },
};

WebFont.load(WebFontConfig);
