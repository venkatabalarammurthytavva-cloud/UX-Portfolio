import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function generateResumePdf() {
  const pdfDoc = await PDFDocument.create();
  
  // A4 size: 595.28 x 841.89 points
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();
  
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors
  const primaryBlue = rgb(0.12, 0.16, 0.58); // Deep blue #1E2994
  const textDark = rgb(0.1, 0.1, 0.12);
  const textMuted = rgb(0.35, 0.35, 0.4);
  const dividerColor = rgb(0.85, 0.85, 0.88);

  const margin = 36;
  let y = height - 42;

  // Header: Name
  page.drawText("Tavva Balaram", {
    x: margin,
    y: y,
    size: 26,
    font: fontBold,
    color: primaryBlue,
  });

  y -= 18;
  // Header: Subtitle
  page.drawText(
    "Senior UI/UX Designer | Product Designer | Figma | Design Systems | AI-Assisted Design",
    {
      x: margin,
      y: y,
      size: 10,
      font: fontBold,
      color: textDark,
    }
  );

  y -= 14;
  // Header Divider
  page.drawLine({
    start: { x: margin, y: y },
    end: { x: width - margin, y: y },
    thickness: 1,
    color: dividerColor,
  });

  y -= 18;

  // Two columns: Left column x = margin (width 170), Right column x = 225 (width 335)
  const leftX = margin;
  const leftW = 175;
  const rightX = 225;
  const rightW = width - rightX - margin;

  // Track Left Column Y
  let leftY = y;

  // LEFT COLUMN: CONTACT
  page.drawText("CONTACT", {
    x: leftX,
    y: leftY,
    size: 10.5,
    font: fontBold,
    color: textDark,
  });
  leftY -= 14;

  const contacts = [
    "tavvabalaram.super.site",
    "venkatabalarammurthy.tavva@gmail.com",
    "+91 9010970346",
    "linkedin.com/in/t-balaram",
    "Hyderabad, India",
  ];

  for (const c of contacts) {
    page.drawText(c, {
      x: leftX,
      y: leftY,
      size: 8.5,
      font: fontRegular,
      color: textDark,
    });
    leftY -= 12;
  }

  leftY -= 8;

  // LEFT COLUMN: CERTIFICATIONS
  page.drawText("CERTIFICATIONS", {
    x: leftX,
    y: leftY,
    size: 10.5,
    font: fontBold,
    color: textDark,
  });
  leftY -= 14;

  const certs = [
    "• UX design certification by Google.",
    "• Design Thinking by Udemy.",
    "• Enterprise Design Thinking Co-creator by IBM.",
  ];

  for (const cert of certs) {
    page.drawText(cert, {
      x: leftX,
      y: leftY,
      size: 8.5,
      font: fontRegular,
      color: textDark,
    });
    leftY -= 13;
  }

  leftY -= 8;

  // LEFT COLUMN: EDUCATION
  page.drawText("EDUCATION", {
    x: leftX,
    y: leftY,
    size: 10.5,
    font: fontBold,
    color: textDark,
  });
  leftY -= 14;

  page.drawText("GMR Institute of Technology | Rajam", {
    x: leftX,
    y: leftY,
    size: 8.5,
    font: fontBold,
    color: textDark,
  });
  leftY -= 11;
  page.drawText("B. Tech in Power Engineering (2015 - 2019)", {
    x: leftX,
    y: leftY,
    size: 8,
    font: fontRegular,
    color: textMuted,
  });
  leftY -= 16;

  // LEFT COLUMN: SKILLS
  page.drawText("SKILLS", {
    x: leftX,
    y: leftY,
    size: 10.5,
    font: fontBold,
    color: textDark,
  });
  leftY -= 14;

  const skillGroups = [
    {
      category: "Design",
      skills:
        "User Experience, Interaction Design, User Interface, User Journey Mapping, Wireframing & Prototyping, Responsive Design, Dashboard Design, Accessibility (WCAG), Visual Design, Low&High Fidelity Mockups, Design Systems, Component Libraries",
    },
    {
      category: "Research",
      skills:
        "User Interviews, User Testing, Information Architecture, User Flows, Story Boarding, Quantitative Analysis, Competitor Analysis, Design Strategy",
    },
    {
      category: "Software",
      skills:
        "Figma, Adobe XD, Balsamiq, Miro, Photoshop, Illustrator, Jira, Zeplin, Notion",
    },
    {
      category: "Collaboration",
      skills:
        "Agile, Scrum, Rapid Iteration, Cross-Functional Collaboration, Communication, Human Centric Approach, Mentorship, Adaptability",
    },
    {
      category: "AI Tools",
      skills:
        "ChatGPT, Claude, Figma AI, Google Stitch, Lovable, Relume, Builder.io, Maze, UIzard",
    },
  ];

  for (const group of skillGroups) {
    page.drawText(group.category, {
      x: leftX,
      y: leftY,
      size: 9,
      font: fontBold,
      color: textDark,
    });
    leftY -= 11;

    // Word wrap skill text
    const words = group.skills.split(" ");
    let currentLine = "";
    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 7.8);
      if (testWidth > leftW) {
        page.drawText(currentLine, {
          x: leftX,
          y: leftY,
          size: 7.8,
          font: fontRegular,
          color: textMuted,
        });
        leftY -= 9.5;
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      page.drawText(currentLine, {
        x: leftX,
        y: leftY,
        size: 7.8,
        font: fontRegular,
        color: textMuted,
      });
      leftY -= 11;
    }
    leftY -= 2;
  }

  // RIGHT COLUMN: PROFILE
  let rightY = y;
  page.drawText("PROFILE", {
    x: rightX,
    y: rightY,
    size: 10.5,
    font: fontBold,
    color: textDark,
  });
  rightY -= 14;

  const profileText =
    "Senior UI/UX Designer with 5+ years of experience designing B2B SaaS, FinTech, Banking, and Retail products. Skilled in end-to-end product design, UX research, interaction design, information architecture, design systems, and responsive web/mobile experiences. Proven track record of delivering 10+ products and collaborating with cross-functional teams to solve complex business and user problems using Figma and AI-assisted design workflows.";

  const profileWords = profileText.split(" ");
  let pLine = "";
  for (const word of profileWords) {
    const testLine = pLine ? `${pLine} ${word}` : word;
    const testWidth = fontRegular.widthOfTextAtSize(testLine, 8.5);
    if (testWidth > rightW) {
      page.drawText(pLine, {
        x: rightX,
        y: rightY,
        size: 8.5,
        font: fontRegular,
        color: textDark,
      });
      rightY -= 11.5;
      pLine = word;
    } else {
      pLine = testLine;
    }
  }
  if (pLine) {
    page.drawText(pLine, {
      x: rightX,
      y: rightY,
      size: 8.5,
      font: fontRegular,
      color: textDark,
    });
    rightY -= 16;
  }

  // RIGHT COLUMN: WORK EXPERIENCE
  page.drawText("WORK EXPERIENCE", {
    x: rightX,
    y: rightY,
    size: 10.5,
    font: fontBold,
    color: textDark,
  });
  rightY -= 15;

  // Job 1
  page.drawText("NeoSOFT Technologies | Remote", {
    x: rightX,
    y: rightY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });
  page.drawText("March 2024 - Present", {
    x: width - margin - fontRegular.widthOfTextAtSize("March 2024 - Present", 8.5),
    y: rightY,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  rightY -= 11;
  page.drawText("UI/UX Designer", {
    x: rightX,
    y: rightY,
    size: 8.5,
    font: fontOblique,
    color: textMuted,
  });
  rightY -= 11;

  const neoBullets = [
    "Currently contributing to digital product initiatives for Axis AMC, optimizing investment journeys and transaction flows across key digital modules.",
    "Led product experience strategy for a U.S.-based Crime Analytics Platform (NDA-bound), defining data visualization logic, user segmentation workflows, and intelligence-driven dashboards to enable faster, data-informed decision-making.",
    "Contributed to the mobile banking revamp for Bank of Baroda, leading UX research initiatives to identify usability gaps and inform product improvement decisions.",
    "Conducted user research (heuristic evaluation, surveys) for the Himalaya Retail app.",
  ];

  for (const bullet of neoBullets) {
    const bulletWords = bullet.split(" ");
    let bLine = "• ";
    let isFirst = true;
    for (const word of bulletWords) {
      const testLine = isFirst ? `${bLine}${word}` : `${bLine} ${word}`;
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 8.2);
      if (testWidth > rightW) {
        page.drawText(bLine, {
          x: rightX,
          y: rightY,
          size: 8.2,
          font: fontRegular,
          color: textDark,
        });
        rightY -= 10.5;
        bLine = "  " + word;
        isFirst = false;
      } else {
        bLine = testLine;
        isFirst = false;
      }
    }
    if (bLine) {
      page.drawText(bLine, {
        x: rightX,
        y: rightY,
        size: 8.2,
        font: fontRegular,
        color: textDark,
      });
      rightY -= 11;
    }
  }

  rightY -= 4;

  // Job 2
  page.drawText("Qentelli Solutions | Hyderabad", {
    x: rightX,
    y: rightY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });
  rightY -= 11;

  page.drawText("Senior CX Designer", {
    x: rightX,
    y: rightY,
    size: 8.5,
    font: fontOblique,
    color: textMuted,
  });
  page.drawText("July 2022 - March 2024", {
    x: width - margin - fontRegular.widthOfTextAtSize("July 2022 - March 2024", 8.5),
    y: rightY,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  rightY -= 10;

  page.drawText("UI/UX Designer", {
    x: rightX,
    y: rightY,
    size: 8.5,
    font: fontOblique,
    color: textMuted,
  });
  page.drawText("February 2022 - July 2022", {
    x: width - margin - fontRegular.widthOfTextAtSize("February 2022 - July 2022", 8.5),
    y: rightY,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  rightY -= 11;

  const qentelliBullets = [
    "Collaborated with product owners, managers, and the UX team in agile discussions for four projects to ensure a thorough understanding of the projects.",
    "Designed simple solutions, led meetings, and ensured Jira alignment.",
    "Increased customer base by 20%, received global recognition for design.",
    "Executed wireframing, prototyping, responsive design, competitive analysis, and iterative methodologies.",
  ];

  for (const bullet of qentelliBullets) {
    const bulletWords = bullet.split(" ");
    let bLine = "• ";
    let isFirst = true;
    for (const word of bulletWords) {
      const testLine = isFirst ? `${bLine}${word}` : `${bLine} ${word}`;
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 8.2);
      if (testWidth > rightW) {
        page.drawText(bLine, {
          x: rightX,
          y: rightY,
          size: 8.2,
          font: fontRegular,
          color: textDark,
        });
        rightY -= 10.5;
        bLine = "  " + word;
        isFirst = false;
      } else {
        bLine = testLine;
        isFirst = false;
      }
    }
    if (bLine) {
      page.drawText(bLine, {
        x: rightX,
        y: rightY,
        size: 8.2,
        font: fontRegular,
        color: textDark,
      });
      rightY -= 11;
    }
  }

  rightY -= 4;

  // Job 3
  page.drawText("Get Infy Solutions | Remote", {
    x: rightX,
    y: rightY,
    size: 9.5,
    font: fontBold,
    color: textDark,
  });
  page.drawText("February 2021 - February 2022", {
    x: width - margin - fontRegular.widthOfTextAtSize("February 2021 - February 2022", 8.5),
    y: rightY,
    size: 8.5,
    font: fontRegular,
    color: textMuted,
  });
  rightY -= 11;
  page.drawText("UI/UX Designer", {
    x: rightX,
    y: rightY,
    size: 8.5,
    font: fontOblique,
    color: textMuted,
  });
  rightY -= 11;

  const infyBullets = [
    "Led end-to-end UX delivery for 4 web and mobile products across FinTech and Retail domains, collaborating with cross-functional teams and stakeholders.",
    "Led research, solved problems, aligned goals, mentored and assigned tasks.",
    "Created scalable design systems and reusable component libraries in Figma, improving design consistency and reducing delivery effort across products.",
    "Led teams, conducted research, developed design systems, and mentored early on.",
  ];

  for (const bullet of infyBullets) {
    const bulletWords = bullet.split(" ");
    let bLine = "• ";
    let isFirst = true;
    for (const word of bulletWords) {
      const testLine = isFirst ? `${bLine}${word}` : `${bLine} ${word}`;
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 8.2);
      if (testWidth > rightW) {
        page.drawText(bLine, {
          x: rightX,
          y: rightY,
          size: 8.2,
          font: fontRegular,
          color: textDark,
        });
        rightY -= 10.5;
        bLine = "  " + word;
        isFirst = false;
      } else {
        bLine = testLine;
        isFirst = false;
      }
    }
    if (bLine) {
      page.drawText(bLine, {
        x: rightX,
        y: rightY,
        size: 8.2,
        font: fontRegular,
        color: textDark,
      });
      rightY -= 11;
    }
  }

  rightY -= 6;

  // RIGHT COLUMN: ACHIEVEMENTS
  page.drawText("ACHIEVEMENTS", {
    x: rightX,
    y: rightY,
    size: 10.5,
    font: fontBold,
    color: textDark,
  });
  rightY -= 13;

  const achievements = [
    "• Modernized a 15-year-old enterprise product, earning global recognition for improving usability and adopting contemporary design principles.",
    "• Successfully delivered two high-priority enterprise projects simultaneously in a fast-paced environment.",
    "• Delivered 10+ products across FinTech, Banking, Retail, and B2B SaaS domains.",
  ];

  for (const ach of achievements) {
    const achWords = ach.split(" ");
    let aLine = "";
    for (const word of achWords) {
      const testLine = aLine ? `${aLine} ${word}` : word;
      const testWidth = fontRegular.widthOfTextAtSize(testLine, 8.2);
      if (testWidth > rightW) {
        page.drawText(aLine, {
          x: rightX,
          y: rightY,
          size: 8.2,
          font: fontRegular,
          color: textDark,
        });
        rightY -= 10.5;
        aLine = "  " + word;
      } else {
        aLine = testLine;
      }
    }
    if (aLine) {
      page.drawText(aLine, {
        x: rightX,
        y: rightY,
        size: 8.2,
        font: fontRegular,
        color: textDark,
      });
      rightY -= 11;
    }
  }

  const pdfBytes = await pdfDoc.save();

  if (!fs.existsSync("public")) {
    fs.mkdirSync("public", { recursive: true });
  }

  fs.writeFileSync("public/Balaram.tavva_Resume.pdf", pdfBytes);
  fs.writeFileSync("public/Tavva_Balaram_Resume.pdf", pdfBytes);
  fs.writeFileSync("public/resume.pdf", pdfBytes);
  console.log("Resume PDF generated successfully at public/Balaram.tavva_Resume.pdf");
}

generateResumePdf().catch(console.error);
