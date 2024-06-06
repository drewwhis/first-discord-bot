--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

INSERT INTO Acronyms
  (acronym, caseSensitive, explanation)
VALUES
  ('CSA', 0, 'Control System Advisor'),
  ('FTAA', 0, '*FIRST* Technical Advisor Assistant'),
  ('FTA', 0, '*FIRST* Technical Advisor'),
  ('GA', 0, 'Game Announcer'),
  ('MC', 0, 'Emcee'),
  ('RI', 0, 'Robot Inspector'),
  ('LRI', 0, 'Lead Robot Inspector'),
  ('JA', 0, 'Judge Advisor'),
  ('JAA', 0, 'Judge Advisor Assistant'),
  ('VC', 0, 'Volunteer Coordinator'),
  ('WTA', 0, 'Wi-Fi Technical Advisor'),
  ('PDP', 0, 'Program Delivery Partner or the Power Distribution Panel (CTRE <https://store.ctr-electronics.com/power-distribution-panel/>)'),
  ('PDH', 0, 'Power Distribution Hub (REV <https://www.revrobotics.com/rev-11-1850/>)'),
  ('PCM', 0, 'Pneumatic Control Module (CTRE <https://store.ctr-electronics.com/pneumatic-control-module/>)'),
  ('PH', 0, 'Pneumatic Hub (REV <https://www.revrobotics.com/rev-11-1852/>)'),
  ('VRM', 0, 'Voltage Regulator Module (CTRE <https://store.ctr-electronics.com/voltage-regulator-module/>)'),
  ('RPM', 0, 'Revolutions per minute or the Radio Power Module (REV <https://www.revrobotics.com/rev-11-1856/>)'),
  ('GP', 0, 'Gracious Professionalism'),
  ('TBA', 0, 'The Blue Alliance (or To Be Announced)'),
  ('KOP', 0, 'Kit of Parts <https://www.firstinspires.org/robotics/frc/kit-of-parts>'),
  ('TBD', 0, 'To Be Determined'),
  ('GDC', 0, 'Game Design Committee'),
  ('CAD', 0, 'Computer Aided Design'),
  ('WFA', 0, 'Woodie Flowers Award'),
  ('WFFA', 0, 'Woodie Flowers Finalist Award'),
  ('DLA', 0, "Dean's List Award"),
  ('FIA', 0, '*FIRST* Impact Award or *FIRST* in Alabama'),
  ('COTS', 0, 'Commercial Off The Shelf'),
  ('HR', 0, 'Head Referee'),
  ('HOF', 0, 'Hall of Fame'),
  ('RTFM', 0, 'Read the *FIRST* Manual'),
  ('YMMV', 0, 'Your Mileage May Vary'),
  ('PWM', 0, 'Pulse Width Modulation'),
  ('DOA', 0, 'Dead On Arrival'),
  ('EI', 0, 'Engineering Inspiration (Award)'),
  ('RD', 0, 'Regional Director'),
  ('FSM', 0, '*FIRST* Senior Mentor'),
  ('BOM', 0, 'Bill of Materials'),
  ('CAN', 0, 'Controller Area Network'),
  ('STIMS', 0, 'Student Team Information Management System (<https://my.firstinspires.org/Dashboard/>)'),
  ('VMS', 0, 'Volunteer Management System (<https://my.firstinspires.org/VMS/Login.aspx>)'),
  ('OPR', 0, 'Offensive Power Rating (<https://www.statbotics.io/blog/models>)'),
  ('EPA', 0, 'Expected Points Added (<https://www.statbotics.io/blog/models>)')
;

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DELETE FROM Acronyms
WHERE acronym IN (
  'CSA',
  'FTAA'
  'FTA',
  'GA',
  'MC',
  'RI',
  'LRI',
  'JA',
  'JAA',
  'VC',
  'WTA',
  'PDP',
  'PDH',
  'PCM',
  'PH',
  'VRM',
  'RPM',
  'GP',
  'TBA',
  'KOP',
  'TBD',
  'GDC',
  'CAD',
  'WFA',
  'WFFA',
  'DLA',
  'FIA',
  'COTS',
  'HR',
  'HOF',
  'RTFM',
  'YMMV',
  'PWM',
  'DOA',
  'EI',
  'RD',
  'FSM',
  'BOM',
  'CAN',
  'STIMS',
  'VMS',
  'OPR',
  'EPA'
);