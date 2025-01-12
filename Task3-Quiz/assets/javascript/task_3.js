const physicsQuestions = [
    {
        id: 1,
        q: "Which of the following statements is true about electric field lines?",
        options: [
            "They can intersect each other.",
            "They form closed loops.",
            "They originate from negative charges and terminate on positive charges.",
            "They never intersect each other.",
        ],
        answer: 4,
        notes: "Electric field lines never intersect each other because at any given point, the electric field has a unique direction.",
    },
    {
        id: 2,
        q: "The unit of electric charge is:",
        options: ["Volt", "Coulomb", "Ohm", "Farad"],
        answer: 2,
        notes: "The SI unit of electric charge is the Coulomb (C).",
    },
    {
        id: 3,
        q: "Ohm's law is valid for:",
        options: [
            "All conductors",
            "Only superconductors",
            "Only semiconductors",
            "Only metallic conductors",
        ],
        answer: 4,
        notes: "Ohm's law is primarily applicable to metallic conductors where the current is directly proportional to the voltage applied.",
    },
    {
        id: 4,
        q: "The magnetic field inside a long straight solenoid carrying current is:",
        options: [
            "Zero",
            "Non-uniform",
            "Uniform",
            "Depends on the radius of the solenoid",
        ],
        answer: 3,
        notes: "The magnetic field inside a long straight solenoid is uniform and parallel to the axis of the solenoid.",
    },
    {
        id: 5,
        q: "The dimensional formula for Planck's constant is:",
        options: ["ML²T⁻¹", "ML²T⁻²", "MLT⁻¹", "ML⁻¹T⁻²"],
        answer: 1,
        notes: "Planck's constant has the dimensional formula ML²T⁻¹, representing action or angular momentum.",
    },
    {
        id: 6,
        q: "In a p-n junction diode under forward bias, the potential barrier:",
        options: ["Increases", "Decreases", "Remains the same", "Becomes zero"],
        answer: 2,
        notes: "Under forward bias, the potential barrier of a p-n junction diode decreases, allowing current to flow.",
    },
    {
        id: 7,
        q: "The speed of electromagnetic waves in a vacuum is:",
        options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"],
        answer: 2,
        notes: "Electromagnetic waves travel at a speed of approximately 3 × 10⁸ meters per second in a vacuum.",
    },
    {
        id: 8,
        q: "The phenomenon of splitting of light into its constituent colors is called:",
        options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
        answer: 3,
        notes: "Dispersion is the phenomenon where light splits into its constituent colors when passing through a prism.",
    },
    {
        id: 9,
        q: "The energy of a photon is directly proportional to its:",
        options: ["Wavelength", "Frequency", "Amplitude", "Speed"],
        answer: 2,
        notes: "The energy of a photon is directly proportional to its frequency, as given by E = hν.",
    },
    {
        id: 10,
        q: "In an AC circuit, the opposition offered by a capacitor to the flow of current is known as:",
        options: [
            "Resistance",
            "Inductive reactance",
            "Capacitive reactance",
            "Impedance",
        ],
        answer: 3,
        notes: "Capacitive reactance is the opposition offered by a capacitor to the flow of alternating current.",
    },
    {
        id: 11,
        q: "The SI unit of power is:",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        answer: 2,
        notes: "The SI unit of power is the Watt (W), which is defined as one joule per second.",
    },
    {
        id: 12,
        q: "The focal length of a plane mirror is:",
        options: [
            "Infinity",
            "Zero",
            "Negative",
            "Depends on the object distance",
        ],
        answer: 1,
        notes: "The focal length of a plane mirror is considered to be infinity because it reflects light rays parallel to each other.",
    },
    {
        id: 13,
        q: "Which of the following is a scalar quantity?",
        options: ["Velocity", "Acceleration", "Force", "Work"],
        answer: 4,
        notes: "Work is a scalar quantity as it has only magnitude and no direction.",
    },
    {
        id: 14,
        q: "The first law of thermodynamics is a statement of the principle of:",
        options: [
            "Conservation of momentum",
            "Conservation of energy",
            "Conservation of mass",
            "Conservation of charge",
        ],
        answer: 2,
        notes: "The first law of thermodynamics states that energy cannot be created or destroyed, only transformed.",
    },
    {
        id: 15,
        q: "The frequency of a wave is the reciprocal of its:",
        options: ["Amplitude", "Time period", "Wavelength", "Speed"],
        answer: 2,
        notes: "Frequency is the reciprocal of the time period (f = 1/T).",
    },
    {
        id: 16,
        q: "The escape velocity from the surface of the Earth is approximately:",
        options: ["7.9 km/s", "11.2 km/s", "5.6 km/s", "9.8 km/s"],
        answer: 2,
        notes: "The escape velocity from Earth's surface is about 11.2 km/s.",
    },
    {
        id: 17,
        q: "In a series LCR circuit, the condition for resonance is:",
        options: ["XL = XC", "XL > XC", "XL < XC", "XL = 0"],
        answer: 1,
        notes: "Resonance in an LCR circuit occurs when the inductive reactance (XL) equals the capacitive reactance (XC).",
    },
    {
        id: 18,
        q: "Which of the following is the hardest form of carbon?",
        options: ["Graphite", "Diamond", "Fullerene", "Coal"],
        answer: 2,
        notes: "Diamond is the hardest form of carbon due to its strong covalent bonding.",
    },
    {
        id: 19,
        q: "The momentum of an object is the product of its:",
        options: [
            "Mass and velocity",
            "Mass and acceleration",
            "Force and time",
            "Force and distance",
        ],
        answer: 1,
        notes: "Momentum is defined as the product of an object's mass and its velocity.",
    },
    {
        id: 20,
        q: "Which of the following phenomena cannot be explained by wave theory of light?",
        options: [
            "Interference",
            "Diffraction",
            "Polarization",
            "Photoelectric effect",
        ],
        answer: 4,
        notes: "The photoelectric effect cannot be explained by the wave theory of light; it is explained by the particle theory.",
    },
    {
        id: 21,
        q: "The refractive index of a medium is a measure of:",
        options: [
            "Its density",
            "The speed of light in that medium",
            "The wavelength of light",
            "The frequency of light",
        ],
        answer: 2,
        notes: "The refractive index is the ratio of the speed of light in a vacuum to its speed in the medium.",
    },
    {
        id: 22,
        q: "Newton's first law of motion is also known as the law of:",
        options: ["Force", "Inertia", "Momentum", "Energy"],
        answer: 2,
        notes: "Newton's first law of motion states that an object will remain at rest or in uniform motion unless acted upon by an external force, which is the law of inertia.",
    },
    {
        id: 23,
        q: "The wavelength of a wave is inversely proportional to its:",
        options: ["Amplitude", "Frequency", "Speed", "Time period"],
        answer: 2,
        notes: "Wavelength is inversely proportional to frequency, as given by the equation λ = v/f.",
    },
    {
        id: 24,
        q: "In a nuclear reactor, the function of a moderator is to:",
        options: [
            "Absorb neutrons",
            "Slow down neutrons",
            "Increase neutron speed",
            "Control the chain reaction",
        ],
        answer: 2,
        notes: "A moderator in a nuclear reactor slows down neutrons, making them more effective in causing fission.",
    },
    {
        id: 25,
        q: "The phenomenon of total internal reflection occurs when:",
        options: [
            "Light passes from a rarer to a denser medium",
            "Light passes from a denser to a rarer medium",
            "The angle of incidence is less than the critical angle",
            "The angle of refraction is 90°",
        ],
        answer: 2,
        notes: "Total internal reflection occurs when light passes from a denser to a rarer medium and the angle of incidence exceeds the critical angle.",
    },
    {
        id: 26,
        q: "The focal length of a convex lens is 20 cm. What is the power of the lens?",
        options: ["+5D", "-5D", "+2D", "-2D"],
        answer: 1,
        notes: "The power of a lens is given by the formula P = 100/f (in cm). For a focal length of 20 cm, P = 100/20 = +5D.",
    },
    {
        id: 27,
        q: "Which of the following is an example of a longitudinal wave?",
        options: ["Light wave", "Sound wave", "Radio wave", "Microwave"],
        answer: 2,
        notes: "Sound waves are longitudinal waves as the particles of the medium vibrate parallel to the direction of propagation of the wave.",
    },
    {
        id: 28,
        q: "What is the SI unit of electric charge?",
        options: ["Coulomb", "Volt", "Ampere", "Ohm"],
        answer: 1,
        notes: "The SI unit of electric charge is Coulomb (C).",
    },
    {
        id: 29,
        q: "What happens to the resistance of a conductor when its temperature increases?",
        options: [
            "Increases",
            "Decreases",
            "Remains the same",
            "First decreases then increases",
        ],
        answer: 1,
        notes: "The resistance of a conductor typically increases with an increase in temperature due to increased collisions of electrons.",
    },
    {
        id: 30,
        q: "Which device is used to measure electric current?",
        options: ["Voltmeter", "Ammeter", "Galvanometer", "Potentiometer"],
        answer: 2,
        notes: "An ammeter is used to measure electric current in a circuit.",
    },
    {
        id: 31,
        q: "What is the phenomenon of splitting white light into its constituent colors called?",
        options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
        answer: 3,
        notes: "Dispersion is the phenomenon where white light splits into its constituent colors when passing through a prism.",
    },
    {
        id: 32,
        q: "The image formed by a plane mirror is: ",
        options: [
            "Real and inverted",
            "Virtual and inverted",
            "Real and erect",
            "Virtual and erect",
        ],
        answer: 4,
        notes: "A plane mirror always forms a virtual and erect image of the object.",
    },
    {
        id: 33,
        q: "What is the velocity of sound in air at standard temperature and pressure?",
        options: ["343 m/s", "299 m/s", "450 m/s", "500 m/s"],
        answer: 1,
        notes: "At standard temperature and pressure, the velocity of sound in air is approximately 343 m/s.",
    },
    {
        id: 34,
        q: "Which of the following laws states that energy cannot be created or destroyed?",
        options: [
            "Newton's Third Law",
            "Law of Conservation of Energy",
            "Coulomb's Law",
            "Ohm's Law",
        ],
        answer: 2,
        notes: "The Law of Conservation of Energy states that energy cannot be created or destroyed, only transformed.",
    },
    {
        id: 35,
        q: "What is the unit of the magnetic field?",
        options: ["Tesla", "Henry", "Joule", "Newton"],
        answer: 1,
        notes: "The SI unit of the magnetic field is Tesla (T).",
    },
    {
        id: 36,
        q: "Which of the following materials is a good conductor of electricity?",
        options: ["Rubber", "Wood", "Copper", "Plastic"],
        answer: 3,
        notes: "Copper is a good conductor of electricity due to the presence of free electrons.",
    },
    {
        id: 37,
        q: "The time taken by a pendulum to complete one oscillation is called: ",
        options: ["Frequency", "Time period", "Amplitude", "Wavelength"],
        answer: 2,
        notes: "The time period is the time taken by the pendulum to complete one full oscillation.",
    },
    {
        id: 38,
        q: "What type of mirror is used in vehicles as rearview mirrors?",
        options: [
            "Plane mirror",
            "Concave mirror",
            "Convex mirror",
            "Parabolic mirror",
        ],
        answer: 3,
        notes: "Convex mirrors are used as rearview mirrors in vehicles because they provide a wider field of view.",
    },
    {
        id: 39,
        q: "The speed of light is maximum in which medium?",
        options: ["Air", "Water", "Glass", "Vacuum"],
        answer: 4,
        notes: "The speed of light is maximum in a vacuum, approximately 3 x 10^8 m/s.",
    },
    {
        id: 40,
        q: "What is the unit of force in the SI system?",
        options: ["Newton", "Dyne", "Pascal", "Joule"],
        answer: 1,
        notes: "The SI unit of force is the Newton (N).",
    },
    {
        id: 41,
        q: "Which phenomenon is responsible for the blue color of the sky?",
        options: [
            "Reflection",
            "Scattering of light",
            "Refraction",
            "Dispersion",
        ],
        answer: 2,
        notes: "The scattering of light, particularly shorter wavelengths like blue, is responsible for the blue color of the sky.",
    },
    {
        id: 42,
        q: "An object is placed at the focus of a convex lens. What is the nature of the image formed?",
        options: [
            "Real and inverted",
            "Virtual and erect",
            "No image",
            "Real and erect",
        ],
        answer: 3,
        notes: "When an object is placed at the focus of a convex lens, no image is formed as rays emerge parallel.",
    },
    {
        id: 43,
        q: "What is the formula for calculating kinetic energy?",
        options: ["mgh", "1/2 mv^2", "mv", "m/v"],
        answer: 2,
        notes: "Kinetic energy is calculated using the formula KE = 1/2 mv^2, where m is mass and v is velocity.",
    },
    {
        id: 44,
        q: "Which scientist proposed the three laws of motion?",
        options: [
            "Albert Einstein",
            "Isaac Newton",
            "Galileo Galilei",
            "Marie Curie",
        ],
        answer: 2,
        notes: "Isaac Newton proposed the three laws of motion, forming the foundation of classical mechanics.",
    },
    {
        id: 45,
        q: "What is the range of human hearing in terms of frequency?",
        options: [
            "10 Hz to 10 kHz",
            "20 Hz to 20 kHz",
            "30 Hz to 30 kHz",
            "40 Hz to 40 kHz",
        ],
        answer: 2,
        notes: "The range of human hearing is approximately 20 Hz to 20 kHz.",
    },
    {
        id: 46,
        q: "What is the direction of electric current in a circuit?",
        options: [
            "From negative to positive terminal",
            "From positive to negative terminal",
            "Both directions",
            "No specific direction",
        ],
        answer: 2,
        notes: "The direction of conventional electric current is from the positive terminal to the negative terminal of a battery.",
    },
    {
        id: 47,
        q: "Which type of electromagnetic radiation has the shortest wavelength?",
        options: ["X-rays", "Gamma rays", "UV rays", "Microwaves"],
        answer: 2,
        notes: "Gamma rays have the shortest wavelength in the electromagnetic spectrum.",
    },
    {
        id: 48,
        q: "What is the primary source of energy for the Earth?",
        options: [
            "Geothermal energy",
            "Solar energy",
            "Nuclear energy",
            "Wind energy",
        ],
        answer: 2,
        notes: "The Sun, through solar energy, is the primary source of energy for the Earth.",
    },
    {
        id: 49,
        q: "Which component of an electric circuit is used to store charge?",
        options: ["Resistor", "Inductor", "Capacitor", "Diode"],
        answer: 3,
        notes: "A capacitor is used in an electric circuit to store charge.",
    },
    {
        id: 50,
        q: "What is the formula for pressure?",
        options: [
            "Force x Area",
            "Force / Area",
            "Area / Force",
            "Force + Area",
        ],
        answer: 2,
        notes: "Pressure is calculated using the formula Pressure = Force / Area.",
    },
    {
        id: 51,
        q: "Which type of lens is used to correct myopia (nearsightedness)?",
        options: [
            "Convex lens",
            "Concave lens",
            "Cylindrical lens",
            "Bifocal lens",
        ],
        answer: 2,
        notes: "A concave lens is used to correct myopia as it helps diverge light rays before they reach the eye.",
    },
    {
        id: 52,
        q: "What is the name of the process by which a solid changes directly into a gas?",
        options: ["Condensation", "Sublimation", "Vaporization", "Deposition"],
        answer: 2,
        notes: "Sublimation is the process where a solid directly changes into a gas without passing through the liquid state.",
    },
    {
        id: 53,
        q: "What is the unit of electric potential difference?",
        options: ["Ampere", "Ohm", "Volt", "Watt"],
        answer: 3,
        notes: "The unit of electric potential difference is the Volt (V).",
    },
    {
        id: 54,
        q: "Which physical quantity is measured in Joules?",
        options: ["Power", "Work", "Force", "Pressure"],
        answer: 2,
        notes: "Work and energy are measured in Joules in the SI system.",
    },
    {
        id: 55,
        q: "What is the phenomenon of bending of light when it passes from one medium to another?",
        options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
        answer: 2,
        notes: "Refraction occurs when light bends while transitioning between media with different densities.",
    },
    {
        id: 56,
        q: "What is the acceleration due to gravity on the surface of the Earth?",
        options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
        answer: 2,
        notes: "The standard acceleration due to gravity on Earth is approximately 9.8 m/s².",
    },
    {
        id: 57,
        q: "Which type of wave requires a medium to travel?",
        options: [
            "Electromagnetic waves",
            "Mechanical waves",
            "X-rays",
            "Gamma rays",
        ],
        answer: 2,
        notes: "Mechanical waves, such as sound waves, require a medium to propagate.",
    },
    {
        id: 58,
        q: "The mirror used in headlights of vehicles is:",
        options: [
            "Plane mirror",
            "Concave mirror",
            "Convex mirror",
            "Parabolic mirror",
        ],
        answer: 2,
        notes: "Concave mirrors are used in vehicle headlights to focus light into a beam.",
    },
    {
        id: 59,
        q: "Which color of light has the shortest wavelength?",
        options: ["Red", "Blue", "Violet", "Green"],
        answer: 3,
        notes: "Violet light has the shortest wavelength in the visible spectrum.",
    },
    {
        id: 60,
        q: "What is the function of a fuse in an electric circuit?",
        options: [
            "To increase current",
            "To decrease voltage",
            "To prevent overloading",
            "To store energy",
        ],
        answer: 3,
        notes: "A fuse prevents overloading by breaking the circuit when the current exceeds a safe level.",
    },
    {
        id: 61,
        q: "What is the formula for calculating momentum?",
        options: ["mv", "m/v", "1/2 mv²", "mgh"],
        answer: 1,
        notes: "Momentum is calculated as the product of mass and velocity, p = mv.",
    },
    {
        id: 62,
        q: "What is the principle behind hydraulic systems?",
        options: [
            "Pascal's Law",
            "Archimedes' Principle",
            "Bernoulli's Principle",
            "Boyle's Law",
        ],
        answer: 1,
        notes: "Hydraulic systems operate on Pascal's Law, which states that pressure applied to a confined fluid is transmitted uniformly in all directions.",
    },
    {
        id: 63,
        q: "Which electromagnetic wave is used in remote controls?",
        options: ["Infrared", "Microwave", "Ultraviolet", "X-rays"],
        answer: 1,
        notes: "Infrared waves are used in remote controls to communicate with electronic devices.",
    },
    {
        id: 64,
        q: "The law that states 'For every action, there is an equal and opposite reaction' is:",
        options: [
            "Newton's First Law",
            "Newton's Second Law",
            "Newton's Third Law",
            "Law of Conservation of Energy",
        ],
        answer: 3,
        notes: "Newton's Third Law states that for every action, there is an equal and opposite reaction.",
    },
    {
        id: 65,
        q: "What is the name of the force that opposes the motion of an object through a fluid?",
        options: [
            "Gravitational force",
            "Frictional force",
            "Drag force",
            "Centripetal force",
        ],
        answer: 3,
        notes: "Drag force opposes the motion of an object moving through a fluid such as air or water.",
    },
    {
        id: 66,
        q: "What is the unit of potential difference in the SI system?",
        options: ["Watt", "Volt", "Coulomb", "Ampere"],
        answer: 2,
        notes: "The unit of potential difference in the SI system is Volt.",
    },
    {
        id: 67,
        q: "Which of the following is not an electromagnetic wave?",
        options: ["Microwave", "Sound wave", "X-ray", "Infrared"],
        answer: 2,
        notes: "Sound waves are mechanical waves and not electromagnetic waves.",
    },
    {
        id: 68,
        q: "What is the charge on an electron?",
        options: [
            "+1.6 x 10^-19 C",
            "-1.6 x 10^-19 C",
            "+1.6 x 10^-18 C",
            "-1.6 x 10^-18 C",
        ],
        answer: 2,
        notes: "The charge on an electron is -1.6 x 10^-19 Coulombs.",
    },
    {
        id: 69,
        q: "Which law states that the current through a conductor is directly proportional to the voltage across it?",
        options: [
            "Ohm's Law",
            "Coulomb's Law",
            "Faraday's Law",
            "Ampere's Law",
        ],
        answer: 1,
        notes: "Ohm's Law states that current is directly proportional to voltage across a conductor, provided the temperature remains constant.",
    },
    {
        id: 70,
        q: "What is the speed of light in a vacuum?",
        options: [
            "3 x 10^8 m/s",
            "3 x 10^6 m/s",
            "3 x 10^4 m/s",
            "3 x 10^2 m/s",
        ],
        answer: 1,
        notes: "The speed of light in a vacuum is approximately 3 x 10^8 meters per second.",
    },
    {
        id: 71,
        q: "Which particle is responsible for the flow of current in a conductor?",
        options: ["Protons", "Neutrons", "Electrons", "Ions"],
        answer: 3,
        notes: "Electrons are responsible for the flow of current in a conductor due to their mobility.",
    },
    {
        id: 72,
        q: "Which of the following is a vector quantity?",
        options: ["Speed", "Distance", "Displacement", "Energy"],
        answer: 3,
        notes: "Displacement is a vector quantity as it has both magnitude and direction.",
    },
    {
        id: 73,
        q: "Which phenomenon allows optical fibers to transmit light over long distances?",
        options: [
            "Diffraction",
            "Total internal reflection",
            "Refraction",
            "Polarization",
        ],
        answer: 2,
        notes: "Total internal reflection allows light to travel through optical fibers without significant loss.",
    },
    {
        id: 74,
        q: "What is the name of the device that converts mechanical energy into electrical energy?",
        options: ["Electric motor", "Generator", "Transformer", "Capacitor"],
        answer: 2,
        notes: "A generator converts mechanical energy into electrical energy.",
    },
    {
        id: 75,
        q: "What is the principle behind the working of a lever?",
        options: [
            "Newton's Laws",
            "Principle of moments",
            "Archimedes' principle",
            "Hooke's law",
        ],
        answer: 2,
        notes: "The principle of moments states that for a lever to be in equilibrium, the clockwise moments equal the counterclockwise moments.",
    },
    {
        id: 76,
        q: "What is the relationship between frequency and wavelength in a wave?",
        options: [
            "Directly proportional",
            "Inversely proportional",
            "Unrelated",
            "Equal",
        ],
        answer: 2,
        notes: "Frequency and wavelength are inversely proportional, as per the wave equation: v = fλ.",
    },
    {
        id: 77,
        q: "Which of the following is a non-renewable source of energy?",
        options: ["Solar energy", "Wind energy", "Coal", "Geothermal energy"],
        answer: 3,
        notes: "Coal is a non-renewable source of energy because it takes millions of years to form.",
    },
    {
        id: 78,
        q: "What is the device used to measure atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Ammeter", "Hygrometer"],
        answer: 2,
        notes: "A barometer is used to measure atmospheric pressure.",
    },
    {
        id: 79,
        q: "Which property of a sound wave determines its pitch?",
        options: ["Amplitude", "Frequency", "Speed", "Wavelength"],
        answer: 2,
        notes: "The pitch of a sound is determined by its frequency; higher frequencies correspond to higher pitches.",
    },
    {
        id: 80,
        q: "What is the unit of work in the SI system?",
        options: ["Joule", "Newton", "Watt", "Pascal"],
        answer: 1,
        notes: "Work is measured in Joules in the SI system.",
    },
    {
        id: 81,
        q: "Which phenomenon causes the apparent bending of a pencil in water?",
        options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
        answer: 2,
        notes: "Refraction causes the pencil to appear bent due to the change in speed of light as it moves between air and water.",
    },
    {
        id: 82,
        q: "What is the escape velocity of an object on Earth?",
        options: ["11.2 km/s", "8.5 km/s", "9.8 m/s", "12 km/s"],
        answer: 1,
        notes: "The escape velocity on Earth is approximately 11.2 km/s.",
    },
    {
        id: 83,
        q: "Which element is commonly used in the filament of a light bulb?",
        options: ["Copper", "Tungsten", "Iron", "Aluminum"],
        answer: 2,
        notes: "Tungsten is used in light bulb filaments due to its high melting point and durability.",
    },
    {
        id: 84,
        q: "Which physical quantity is defined as the rate of change of displacement?",
        options: ["Speed", "Velocity", "Acceleration", "Force"],
        answer: 2,
        notes: "Velocity is defined as the rate of change of displacement with respect to time.",
    },
    {
        id: 85,
        q: "What type of wave is a sound wave in air?",
        options: [
            "Transverse wave",
            "Longitudinal wave",
            "Electromagnetic wave",
            "Stationary wave",
        ],
        answer: 2,
        notes: "Sound waves in air are longitudinal waves where the particles of the medium vibrate parallel to the direction of propagation.",
    },
    {
        id: 86,
        q: "What is the term for materials that do not allow electric current to flow through them easily?",
        options: [
            "Conductors",
            "Semiconductors",
            "Insulators",
            "Superconductors",
        ],
        answer: 3,
        notes: "Insulators are materials that do not allow electric current to flow through them easily.",
    },
    {
        id: 87,
        q: "What is the effect on the boiling point of water at higher altitudes?",
        options: [
            "Increases",
            "Decreases",
            "Remains the same",
            "First increases then decreases",
        ],
        answer: 2,
        notes: "At higher altitudes, atmospheric pressure is lower, causing the boiling point of water to decrease.",
    },
    {
        id: 88,
        q: "What is the term for the amount of energy required to raise the temperature of 1 gram of water by 1°C?",
        options: ["Joule", "Watt", "Calorie", "Pascal"],
        answer: 3,
        notes: "A calorie is the amount of energy required to raise the temperature of 1 gram of water by 1°C.",
    },
    {
        id: 89,
        q: "What is the principle of operation of a hydraulic lift?",
        options: [
            "Bernoulli's principle",
            "Archimedes' principle",
            "Pascal's law",
            "Hooke's law",
        ],
        answer: 3,
        notes: "A hydraulic lift operates on Pascal's law, which states that pressure applied to a confined fluid is transmitted equally in all directions.",
    },
    {
        id: 90,
        q: "What happens to the gravitational force between two objects if the distance between them is doubled?",
        options: [
            "Becomes half",
            "Becomes one-fourth",
            "Becomes double",
            "Remains the same",
        ],
        answer: 2,
        notes: "Gravitational force is inversely proportional to the square of the distance between two objects; if the distance is doubled, the force becomes one-fourth.",
    },
    {
        id: 91,
        q: "What is the unit of electric power in the SI system?",
        options: ["Watt", "Joule", "Newton", "Ampere"],
        answer: 1,
        notes: "Electric power is measured in Watts in the SI system.",
    },
    {
        id: 92,
        q: "Which phenomenon is responsible for the formation of a rainbow?",
        options: [
            "Reflection",
            "Refraction and dispersion",
            "Diffraction",
            "Interference",
        ],
        answer: 2,
        notes: "Rainbows are formed due to refraction and dispersion of light in water droplets.",
    },
    {
        id: 93,
        q: "What is the acceleration due to gravity on the surface of the Earth?",
        options: ["8.5 m/s²", "9.8 m/s²", "10 m/s²", "11.2 m/s²"],
        answer: 2,
        notes: "The acceleration due to gravity on the surface of the Earth is approximately 9.8 m/s².",
    },
    {
        id: 94,
        q: "Which gas is the major component of Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        answer: 2,
        notes: "Nitrogen constitutes about 78% of Earth's atmosphere, making it the major component.",
    },
    {
        id: 95,
        q: "What is the purpose of a fuse in an electric circuit?",
        options: [
            "To store charge",
            "To regulate voltage",
            "To prevent overloading",
            "To increase resistance",
        ],
        answer: 3,
        notes: "A fuse is used to prevent overloading and protect the circuit by breaking the connection when the current exceeds a certain value.",
    },
    {
        id: 96,
        q: "What is the term for the bending of waves around obstacles?",
        options: ["Reflection", "Refraction", "Diffraction", "Interference"],
        answer: 3,
        notes: "Diffraction is the bending of waves around obstacles or openings.",
    },
    {
        id: 97,
        q: "What is the potential difference between two points in a circuit measured in?",
        options: ["Ampere", "Volt", "Ohm", "Joule"],
        answer: 2,
        notes: "The potential difference between two points in a circuit is measured in Volts.",
    },
    {
        id: 98,
        q: "Which type of lens is thicker at the center than at the edges?",
        options: [
            "Concave lens",
            "Convex lens",
            "Cylindrical lens",
            "Plano-concave lens",
        ],
        answer: 2,
        notes: "A convex lens is thicker at the center than at the edges.",
    },
    {
        id: 99,
        q: "What is the resistance of a conductor when current is zero?",
        options: [
            "Infinite",
            "Zero",
            "Depends on material",
            "Cannot be determined",
        ],
        answer: 3,
        notes: "The resistance of a conductor depends on its material properties, even if no current flows.",
    },
    {
        id: 100,
        q: "What is the value of 1 horsepower in watts?",
        options: ["746 W", "1000 W", "550 W", "1 kW"],
        answer: 1,
        notes: "1 horsepower is equal to 746 watts.",
    },
];

// Set the timer duration in seconds
let timeLeft = 600; // 10 minutes
let already_attempted = Array(100).fill(0);
let answer_triggered = 0;
let correct = 0;
let wrong = 0;
let question_index;
let count = 0;

function startTimer() {
    const timerDisplay = document.getElementById("timer");

    const countdown = setInterval(() => {
        // Calculate minutes and seconds
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        // Update the timer display
        timerDisplay.textContent = `Time Left: ${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

        // Check if time has run out
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "Time's up!";
            timerDisplay.style.color = "red";
            submit();
        }

        timeLeft--;
    }, 1000);
}

function load(i) {
    skip_button.disabled = false;
    if (already_attempted[i] == 0) {
        answer_triggered = 0;
        question_index = i;
        enable_hover();
        document.getElementById("question_number").textContent =
            "Question " + (i + 1) + " of 100";
        document.getElementById("question").textContent = physicsQuestions[i].q;
        document.getElementById("option1").textContent =
            physicsQuestions[i].options[0];
        document.getElementById("option1").style.backgroundColor = "";
        document.getElementById("option1").style.color = "";
        document.getElementById("option2").textContent =
            physicsQuestions[i].options[1];
        document.getElementById("option2").style.backgroundColor = "";
        document.getElementById("option2").style.color = "";
        document.getElementById("option3").textContent =
            physicsQuestions[i].options[2];
        document.getElementById("option3").style.backgroundColor = "";
        document.getElementById("option3").style.color = "";
        document.getElementById("option4").textContent =
            physicsQuestions[i].options[3];
        document.getElementById("option4").style.backgroundColor = "";
        document.getElementById("option4").style.color = "";
        document.getElementById("explanation").textContent =
            "Explanation: " + physicsQuestions[i].notes;
        document.getElementById("explanation").style.display = "none";
        if (question_index == 99) {
            next_button.textContent = "Submit";
        } else {
            next_button.textContent = "Next";
        }
    } else {
        alert("Question Already Attempted.");
    }
}

function next() {
    if (question_index == 99) {
        for (let i = 0; i < 99; i++) {
            if (already_attempted[i] != 1) {
                let answer = confirm(
                    "Are you sure to Skip remaining questions and Submit the Test"
                );
                if (answer) {
                    submit();
                }
                break;
                count++;
            }
        }
        if(count == 0){
            submit();
        }
    } else {
        load(question_index + 1);
    }
}

function skip() {
    let answer = confirm("Are you sure to skip this question?");
    if (answer) {
        document.getElementById(
            "question" + (question_index + 1)
        ).style.backgroundColor = "yellow";
        next();
    }
}

function try_again() {
    location.reload();
}

function submit() {
    document.getElementById("container").style.display = "none";
    document.getElementById("result").style.display = "flex";
    document.getElementById("attempted").textContent = correct + wrong;
    document.getElementById("skipped").textContent = 100 - correct - wrong;
    document.getElementById("correct").textContent = correct;
    document.getElementById("wrong").textContent = wrong;
    document.getElementById("percentage").textContent = correct + ".00%";
}


function answer(i) {
    skip_button.disabled = true;
    already_attempted[question_index] = 1;
    if (answer_triggered == 0) {
        answer_triggered = 1;
        disable_hover();
        document.getElementById("explanation").style.display = "block";
        let option = document.getElementById("option" + i);
        if (physicsQuestions[question_index].answer == i) {
            correct++;
            option.style.backgroundColor = "green";
            option.style.color = "white";
            document.getElementById(
                "question" + (question_index + 1)
            ).style.backgroundColor = "green";
            document.getElementById(
                "question" + (question_index + 1)
            ).style.color = "white";
        } else {
            wrong++;
            option.style.backgroundColor = "red";
            option.style.color = "white";
            let correct_option = document.getElementById(
                "option" + physicsQuestions[question_index].answer
            );
            correct_option.style.backgroundColor = "green";
            correct_option.style.color = "white";
            document.getElementById(
                "question" + (question_index + 1)
            ).style.backgroundColor = "red";
            document.getElementById(
                "question" + (question_index + 1)
            ).style.color = "white";
        }
    }
}

function disable_hover() {
    document.getElementById("option1").classList.remove("option_hover");
    document.getElementById("option2").classList.remove("option_hover");
    document.getElementById("option3").classList.remove("option_hover");
    document.getElementById("option4").classList.remove("option_hover");
}

function enable_hover() {
    document.getElementById("option1").classList.add("option_hover");
    document.getElementById("option2").classList.add("option_hover");
    document.getElementById("option3").classList.add("option_hover");
    document.getElementById("option4").classList.add("option_hover");
}

let next_button = document.getElementById("button1_main_content");
next_button.addEventListener("click", next);
let skip_button = document.getElementById("button2_main_content");
skip_button.addEventListener("click", skip);
let try_again_button = document.getElementById("try_again_button");
try_again_button.addEventListener("click", try_again);

for (let i = 1; i <= 4; i++) {
    let option = document.getElementById("option" + i);
    option.addEventListener("click", () => {
        answer(i);
    });
}

for (let i = 1; i <= 100; i++) {
    let assign_questions = document.getElementById("question" + i);
    assign_questions.addEventListener("click", () => {
        load(i - 1);
    });
}

// Start the timer when the page loads
startTimer();
load(0);
