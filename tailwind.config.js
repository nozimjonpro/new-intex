/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        21:'150px',
        5.5: "5.5px",
        13: "13px",
        8: "8px",
        32:'32px'
      },
      margin:{
        heroBottom:'120px',
        popularBottom:'9px',
      },
      screens: {
        tablet: "850px",
        mini_phone: "350px",
        mini_phone2: "390px",
        mini_phone3: "410px",
        mini_phone4: "430px",
        mini_phone5: "470px",
        mini_phone6: "530px",
      },
      colors: {
        black: {
          black_dark: "#24283A",
          black_thin: "#464A4D",
          black_light: "#A0A0A0",
        },
        blue: {
          accent: "#109EF4",
          base: "#2B3D90",
          recommend: "#22B0F8",
          textColor: "#109EF4",
        },
        gray: {
          bg_nav: "#FAFAFA",
          bg_main: "#F7F9FA",
          text: "#7A7E80",
          placeholder: "#B4B6B8",
          bg_nav: "#FAFAFA",
          bg_main: "#F7F9FA",
          text: "#7A7E80",
          placeholder: "#B4B6B8",
          foot: "#464A4D",
          input_radius: "#E3E5E5",
        },
        black: {
          black_dark: "#24283A",
          black_thin: "#464A4D",
          black_light: "#A0A0A0",
        },
        blue: {
          accent: "#109EF4",
          base: "#2B3D90",
          recommend: "#22B0F8",
          btn_bg: "#E0E7FF",
        },
        red: {
          xit: "#FF3A3A",
          sale: "#FF5C5C",
        },
        green: {
          new: "#0BCC23",
        },
        yellow: {
          popular: "#FAB529",
        },
      },
      backgroundColor: {
        azure: "#F2F2F2",
        blueActive: "#109EF4",
      },
      lineHeight: {
        36: "36px",
        22: "22px",
        36: "36px",
        22: "22px",
      },
      fontFamily: {
        inter: "Inter",
      },
      width: {
        heroImg: "571px",
        heroContent: "450px",
        heroImgMobile: "320px",
        heroImg: "571px",
        modalMenu: "300px",
        heroContent: "450px",
        heroImgMobile: "320px",
        respo: "100%",
        cardWidth: "280px",
        cardWidthMobile: "150px",
        cardWidthMobile2: "150px",
        cardWidthMobile3: "165px",
        cardWidthMobile4: "170px",
        cardWidthMobile5: "185px",
        cardWidthMobile6: "205px",
        cardWidthMobile7: "230px",
        resCardWidth: "220px",
        orderBtn: "248px",
        resOrderBtn: "196px",
        tashkentPoolsImg: "460px",
        435: "435px",
        410: "410px",
        426: "426px",
        219: "219px",
        111: "111px",
        600: "600px",
      },
      height: {
        cardHeight: "220px",
        resCardHeight: "347px",
        orderBtn: "48px",
        tashkentPoolsImg: "478px",
        heroImg: "571px",
        heroImgMobile: "320px",
        container: "1220px",
        heroContent: "447px",
        cardWidth: "280px",
        inputWidth: "260px",
        mobileInputWidth: "219px",
        resCardWidth: "220px",
        orderBtn: "248px",
        resOrderBtn: "196px",
        heroimgHeight: "319px",
        heriImgMobile: "160px",
        280: "280px",
        426: "426px",
        219: "219px",
        500: "500px",
        420: "420px",
        430: "430px",
        520: "520px",
        577: "577px",
        312: "312px",
        237: "237px",
        264: "264px",
        207: "207px",
        153: "153px",
        135: "135px",
        93: "93px",
        83: "83px",
        48: "48px",
        83: "83px",
      },
      maxHeight: {
        680: "680px",
        520: "520px",
        153: "154px",
        430: "430px",
        237: "237px",
      },
      boxShadow: {
        order_btn:
          "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
        card_shadow: "2px 12px 10px rgba(60, 60, 60, 0.1)",
        card: "2px 12px 24px rgba(60, 60, 60, 0.1)",
      },
      borderRadius: {
        labelRadius: "0px 8px 8px 0px",
        btn_radius: "12px",
        labelRadius: "0px 8px 8px 0px",
        btn_radius: "12px",
        sectionRadius: "20px",
        menuBarWidth: "150px",
        410: "410px",
        426: "426px",
        219: "219px",
        111: "111px",
        heroContent: "450px",
        heroImgMobile: "320px",
        respo: "100%",
        cardWidth: "280px",
        resCardWidth: "220px",
        orderBtn: "248px",
        resOrderBtn: "196px",
        tashkentPoolsImg: "460px",
        600: "600px",
        410: "410px",
        335: "335px",
        426: "426px",
        219: "219px",

        111: "111px",

        111: "111px",
        heroContent: "450px",
        heroImgMobile: "320px",
        respo: "100%",
        cardWidth: "280px",
        resCardWidth: "220px",
        orderBtn: "248px",
        resOrderBtn: "196px",
        tashkentPoolsImg: "460px",
        600: "600px",
        410: "410px",
        335: "335px",
        426: "426px",
        219: "219px",
        111: "111px",
      },
      height: {
        cardHeight: "220px",
        resCardHeight: "347px",
        orderBtn: "48px",
        tashkentPoolsImg: "478px",
        heroImg: "571px",
        heroImgMobile: "320px",
        container: "1220px",
        heroContent: "447px",
        cardWidth: "280px",
        inputWidth: "260px",
        mobileInputWidth: "219px",
        resCardWidth: "220px",
        orderBtn: "248px",
        resOrderBtn: "196px",
        heroimgHeight: "319px",
        heriImgMobile: "160px",
        modalMenuHe: "100vh",
        menuBarHeight: "14px",
        410: "410px",
        426: "426px",
        219: "219px",
        500: "500px",
        420: "420px",
        430: "430px",
        520: "520px",
        577: "577px",
        312: "312px",
        237: "237px",
        264: "264px",
        207: "207px",
        153: "153px",
        135: "135px",
        93: "93px",
        83: "83px",
        48: "48px",
        83: "83px",
      },
      maxWidth: {
        container: "1220px",
        cont: "10.5%",
        inputWidth: "260px",
        426: "426px",
        248: "225px",
        403: "403px",
        362: "362px",
        281: "281px",
        237: "237px",
        290: "290px",
      },
      maxHeight: {
        680: "680px",
        520: "520px",
        153: "154px",
        430: "430px",
        237: "237px",
        380: "380px",
      },
      borderRadius: {
        labelRadius: "0px 8px 8px 0px",
        btn_radius: "12px",
        sectionRadius: "20px",
        sectionRadius: "20px",
        labelRadius: "0px 8px 8px 0px",
        btn_radius: "12px",
        sectionRadius: "20px",
        sectionRadius: "20px",
      },
      translate:{
        82:'82px',
        59:'55px',
      },
      fontSize: {
        32: "32px",
      },
    },
  },
  plugins: [],
};
