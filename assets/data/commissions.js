export const commissions = [
  {
    _uid: "1",
    component: "form-select",
    options: ["Roboto", "Inter", "Be Vietnam", "Muli"],
    default: "Roboto",
    label: "Font family",
  },
  {
    _uid: "2",
    component: "form-select",
    options: ["14px", "15px", "16px", "17px"],
    default: "14px",
    label: "Font size",
  },
  {
    _uid: "3",
    component: "form-select",
    options: ["Open", "Closed"],
    default: "Open",
    label: "Commission Status",
  },
  {
    _uid: "4",
    component: "form-input",
    label: "Main heading",
    value: "Welcome to my commission page",
  },
  {
    _uid: "5",
    component: "form-editor",
    value:
      "How about a dummy text here for testing and a long one if possible so people can assume this is a textarea, not the normal field.",
    label: "Main description",
  },
  {
    _uid: "6",
    component: "form-color",
    label: "Colors",
    palletes: [
      {
        colorLabel: "Accent Color",
        colorPallete: "#4B8CF8",
      },
      {
        colorLabel: "Background Color",
        colorPallete: "#EEEEEE",
      },
      {
        colorLabel: "Body Text Color",
        colorPallete: "#444444",
      },
      {
        colorLabel: "Heading Text Color",
        colorPallete: "#111111",
      },
      {
        colorLabel: "Card Background Color",
        colorPallete: "#FFFFFF",
      },
      {
        colorLabel: "Card Border Color",
        colorPallete: "#DDDDDD",
      },
    ],
  },
];
