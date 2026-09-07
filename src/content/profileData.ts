import type { Language } from "../i18n/ui";

export const PROFILE = {
  site: {
    SEO: {
      title: "IPSerra - Tecnología, Desarrollo y Firmware",
      description:
        "Portfolio y blog de tecnología de Ignacio Pérez Serra (ipserra). Proyectos, guías y artículos sobre desarrollo, sistemas y firmware/embebidos.",
    },
  },
  timezone: "Europe/Madrid",
  language: "es-ES",

  firstName: "Ignacio Pérez Serra",
  name: "IPSerra",
  headLine: "",
  headLine2:
    "Del retro al bare metal: la curiosidad por el “por qué” detrás de cada click. Hoy: firmware, electrónica y robótica, donde el software toca el mundo real (con debug nocturno ocasional).",

  website: "https://ipserra.vercel.app", // cámbialo cuando lo tengas
  repo: "https://github.com/Ignix98/IPSerra", // cámbialo
  avatarUrl: "/_MG_1198.webp", // pon tu avatar en /public/avatar.webp

  shortIntros: [
    "💻 Programador e ingeniero | Firmware y sistemas embebidos",
    "🕹️ Retro + videojuegos: del 8/16-bit a entender el hardware “por dentro”",
    "⚙️ Interés por arquitectura y bajo nivel: buses, temporización, interrupciones y registros",
    "🔧 Del “¿por qué no arranca?” al “ah, era el pull-up / el clock / el reset”",
    "🤖 Robots y cacharreo: cuando el software mueve motores y lee sensores",
    "🐧 Linux | Debug como deporte de contacto",
  ],

  words: ["Es difícil decir qué es imposible, porque el sueño de ayer es la esperanza de hoy y la realidad de mañana — Robert H. Goddard","Cualquier tecnología suficientemente avanzada es indistinguible de la magia — Arthur C. Clarke",],

  skills: [
    "Programación: C / Embedded C, C++, C#, Python, Java, MATLAB/Octave y shell scripting.",
    "Sistemas embebidos: bare-metal, FreeRTOS básico, Embedded Linux, drivers, GPIO, PWM, ADC/DAC, I2C, SPI, UART, CAN y RS-485.",
    "Plataformas: STM32, ESP32, BeagleBone Black, Raspberry Pi, Arduino e Intel 8051.",
    "Comunicaciones: TCP/IP, UDP, MQTT, Ethernet 10G, USB, PCIe, Wi-Fi, 6G-SDI, 3G-SDI, DisplayPort y HDMI.",
    "Testing y verificación: LabVIEW, TestStand, SDKs, test benches, iperf3, ethtool, FFmpeg, multímetro, osciloscopio y análisis de señales.",
    "Robótica y simulación: ROS 1/ROS 2, Gazebo, Unity y MATLAB.",
    "Diseño y prototipado: KiCad, LTspice, SolidWorks e impresión 3D.",
    "Herramientas y SO: Git, Linux y Windows.",
  ],

  links: {
    github: "https://github.com/Ignix98/",
    medium: "",
    twitter: "",
    bluesky: "",
    thread: "",
    mastodon: "",
    youtube: "",
    stackoverflow: "",
    devto: "",
    goodreads: "",
    linkedin: "linkedin.com/in/ignacio-perez-serra/",
  },

  // Estudios
  studies: [
    {
      title: "Universitario en Automática e Informática Industrial (2024–2026)",
      level: "Máster",
      institution: "Universitat Politècnica de València (UPV)",
    },
    {
      title:
        "Ingeniería Electrónica Industrial (2019-2024)",
      level: "Grado",
      institution: "Universitat de València (UV)",
    },
    {
      title: "Desarrollo de Aplicaciones Multiplataforma (2017–2019)",
      level: "CFGS",
      institution: "IES Henri Matisse",
    },
  ],

  // Certificados
  certificates: [
    {
      title:
        "nRF Connect SDK Fundamentals (Zephyr RTOS, Devicetree, GPIO, UART e I2C)",
      level: "Curso · Por comenzar",
      institution: "Nordic Semiconductor Developer Academy · 8 - 10 horas",
    },
    {
      title:
        "(MCU1) Learn bare metal driver development using Embedded C (STM32: GPIO, I2C, SPI, USART)",
      level: "Curso · En proceso",
      institution: "Udemy · 28,5 horas",
    },
    {
      title: "Self Driving and ROS - Learn Doing! Odometry & Control",
      level: "Curso",
      institution: "Udemy · 19,5 horas · Instructor: Antonio Brandi",
    },
    {
      title:
        "Experimentación con equipos electrónicos para medidas de bajo nivel",
      level: "Curso de Extensión universitaria",
      institution: "Universitat de València (UV) · Julio 2024",
    },
  ],

};


// Preserve PROFILE for pages not yet translated.
const translations = {
  es: {
    site: PROFILE.site, language: PROFILE.language, headLine: PROFILE.headLine,
    headLine2: PROFILE.headLine2, shortIntros: PROFILE.shortIntros, words: PROFILE.words,
    skills: PROFILE.skills, studies: PROFILE.studies, certificates: PROFILE.certificates,
  },
  en: {
    ...{
  "site": {
    "SEO": {
      "title": "IPSerra - Technology, Development and Firmware",
      "description": "Technology portfolio and blog by Ignacio Pérez Serra (ipserra). Projects, guides and articles on development, systems and embedded firmware."
    }
  },
  "language": "en-GB",
  "headLine": "",
  "headLine2": "From retro to bare metal: curiosity about the ‘why’ behind every click. These days: firmware, electronics and robotics, where software touches the real world (with the occasional late-night debugging session).",
  "shortIntros": [
    "💻 Programmer and engineer | Firmware and embedded systems",
    "🕹️ Retro computing + video games: from 8/16-bit to understanding hardware from the inside",
    "⚙️ Interested in architecture and low-level systems: buses, timing, interrupts and registers",
    "🔧 From ‘why won't it boot?’ to ‘oh, it was the pull-up / clock / reset’",
    "🤖 Robots and tinkering: when software drives motors and reads sensors",
    "🐧 Linux | Debugging as a contact sport"
  ],
  "words": [
    "It is difficult to say what is impossible, for the dream of yesterday is the hope of today and the reality of tomorrow — Robert H. Goddard",
    "Any sufficiently advanced technology is indistinguishable from magic — Arthur C. Clarke"
  ],
  "skills": [
    "Programming: C / Embedded C, C++, C#, Python, Java, MATLAB/Octave and shell scripting.",
    "Embedded systems: bare-metal, basic FreeRTOS, Embedded Linux, drivers, GPIO, PWM, ADC/DAC, I2C, SPI, UART, CAN and RS-485.",
    "Platforms: STM32, ESP32, BeagleBone Black, Raspberry Pi, Arduino and Intel 8051.",
    "Communications: TCP/IP, UDP, MQTT, Ethernet 10G, USB, PCIe, Wi-Fi, 6G-SDI, 3G-SDI, DisplayPort and HDMI.",
    "Testing and verification: LabVIEW, TestStand, SDKs, test benches, iperf3, ethtool, FFmpeg, multimeter, oscilloscope and signal analysis.",
    "Robotics and simulation: ROS 1/ROS 2, Gazebo, Unity and MATLAB.",
    "Design and prototyping: KiCad, LTspice, SolidWorks and 3D printing.",
    "Tools and operating systems: Git, Linux and Windows."
  ]
},
    studies: [
      { ...PROFILE.studies[0], title: "Automation and Industrial Computing (2024–2026)", level: "Master's degree" },
      { ...PROFILE.studies[1], title: "Industrial Electronic Engineering (2019–2024)", level: "Bachelor's degree" },
      { ...PROFILE.studies[2], title: "Multiplatform Application Development (2017–2019)", level: "Higher vocational qualification" },
    ],
    certificates: [
      { ...PROFILE.certificates[0], title: "nRF Connect SDK Fundamentals (Zephyr RTOS, Devicetree, GPIO, UART and I2C)", level: "Course · Not started", institution: "Nordic Semiconductor Developer Academy · 8–10 hours" },
      { ...PROFILE.certificates[1], level: "Course · In progress", institution: "Udemy · 28.5 hours" },
      { ...PROFILE.certificates[2], level: "Course", institution: "Udemy · 19.5 hours · Instructor: Antonio Brandi" },
      { ...PROFILE.certificates[3], title: "Experimentation with electronic equipment for low-level measurements", level: "University extension course", institution: "Universitat de València (UV) · July 2024" },
    ],
  },
};
export function getProfile(language: Language) {
  return { ...PROFILE, ...translations[language] };
}
