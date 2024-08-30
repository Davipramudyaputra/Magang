
import React from 'react';
import { Avatar, Box, Chip, Divider, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

interface Project {
  projectName: string;
  role: string;
  from: string;
  to: string;
  customer: string;
  projectDescription: string;
  technicalInformation: string;
  jobDescription: string;
}

const DATA = {
  employee: {
    name: 'Davi Pramudya Putra',
    position: 'Project Manager',
    email: 'pramudyadavi28@gmail.com',
    image: 'https://thispersondoesnotexist.com/', // Example image URL
    biodata: {
      profile: 'I am Davi Pramudya Putra, a passionate Software Engineering student at Telkom University with a strong interest in technology and design  ',
      placeOfBirth: 'Bandung',
      dateOfBirth: '28 june 2005',
      gender: 'Male',
      language: 'English, Indonesian',
    },
  },
  histories: {
    employment: [
      {
        employer: 'PT Padepokan Tujuh Sembilan',
        position: 'IT Marketing',
        from: 'Jan 2023',
      },
      {
        employer: 'PT Padepokan Tujuh Sembilan',
        position: 'Front-end Developer',
        from: 'Feb 2024',

      },
      {
        employer: 'PT Padepokan Tujuh Sembilan',
        position: 'Back-End Developer',
        from: 'Mar 2025',

      },
      {
        employer: 'PT Padepokan Tujuh Sembilan',
        position: 'QA Enginer',
        from: 'Apr 2026',

      },
      {
        employer: 'PT Padepokan Tujuh Sembilan',
        position: 'Database Management',
        from: 'Mei 2027',

      },
      {
        employer: 'PT Padepokan Tujuh Sembilan',
        position: 'FullStack Developer',
        from: 'Jun 2028',

      },
      {
        employer: 'PT Padepokan Tujuh Sembilan',
        position: 'Human Capital',
        from: 'Jul 2029',

      },
    ],
    certification: [
      {
        title: 'DATABASE BUILD',
        provider: 'MangoDb',
        date: 'Aug 2023',
        duration: '2 weeks',
        certificate: 'No',
      },
      {
        title: 'DATABASE BUILD',
        provider: 'MangoDb',
        date: 'Aug 2023',
        duration: '2 weeks',
        certificate: 'No',
      },
      {
        title: 'DATABASE BUILD',
        provider: 'MangoDb',
        date: 'Aug 2023',
        duration: '2 weeks',
        certificate: 'No',
      },
    ],
    education: [
      {
        school: 'SMAIT FITRAH INSANI 2',
        degree: 'SMA',
        subject: 'Saintek Student',
        from: '2019',
        to: '2021',
      },
      {
        school: 'SMAIT FITRAH INSANI 2',
        degree: 'SMA',
        subject: 'Saintek Student',
        from: '2019',
        to: '2021',
      },
    ],
    project: [
      {
        projectName: 'Telyu Market',
        role: 'UI/UX Design, QA Engineer',
        from: 'Feb 23',
        to: 'June 2024',
        customer: 'Telkom Student',
        projectDescription: 'Telyu Market is a web application designed as a marketplace for Telkom students, making it easy for them to sell used goods, food, and more. The application features a soft UI, allowing students to navigate and use it easily and intuitively.',
        technicalInformation: 'QA Enginer & UI/UX Designer',
        jobDescription: 'Create a UI view of the Telyu Market applicationChecking the running features of the telyu market application',
      },
      {
        projectName: 'Telyu Market',
        role: 'UI/UX Design, QA Engineer',
        from: 'Feb 23',
        to: 'June 2024',
        customer: 'Telkom Student',
        projectDescription: 'Telyu Market is a web application designed as a marketplace for Telkom students, making it easy for them to sell used goods, food, and more. The application features a soft UI, allowing students to navigate and use it easily and intuitively.',
        technicalInformation: 'QA Enginer & UI/UX Designer',
        jobDescription: 'Create a UI view of the Telyu Market applicationChecking the running features of the telyu market application',
      },
      {
        projectName: 'Telyu Market',
        role: 'UI/UX Design, QA Engineer',
        from: 'Feb 23',
        to: 'June 2024',
        customer: 'Telkom Student',
        projectDescription: 'Telyu Market is a web application designed as a marketplace for Telkom students, making it easy for them to sell used goods, food, and more. The application features a soft UI, allowing students to navigate and use it easily and intuitively.',
        technicalInformation: 'QA Enginer & UI/UX Designer',
        jobDescription: 'Create a UI view of the Telyu Market applicationChecking the running features of the telyu market application',
      },
    ] as Project[],
  },
};

const Page = () => {
  return (
    <>
      <Box className="page-header">
        <img src="/Header.png" alt="" width="100%" height="50px" />
        <Box component="img" src="/Logo.svg" alt="" sx={{ height: 50, position: 'absolute', top: 50, left: 20 }} /> {/* Add logo here */}
      </Box>
      <Box className="page-footer">
        <img src="/Footer.png" alt="" width="100%" height="47px" />
      </Box>

      <Box component="table" sx={{ width: '100%' }}>
        <Box component="thead">
          <Box component="tr">
            <Box component="td">
              <Box className="page-header-space" />
            </Box>
          </Box>
        </Box>

        <Box component="tbody">
          <Box component="tr">
            <Box
              component="td"
              sx={{
                py: 2,
                px: 9,
              }}
            >
              <Stack direction="column" spacing={3} alignItems="stretch">
                <Stack direction="row" alignItems="center">
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ py: 1 }}>
                      <strong>{DATA.employee.name}</strong>
                    </Typography>
                    <Divider sx={{ borderBottomWidth: 2, borderColor: '#000000', marginTop: 1 }} />
                    <Typography variant="subtitle1">{DATA.employee.position}</Typography>
                    <Typography variant="subtitle2">{DATA.employee.email}</Typography>
                  </Box>
                  <Box>
                    <Avatar src={DATA.employee.image} sx={{ height: 150, width: 150 }}>
                      Talent Image
                    </Avatar>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} justifyContent="stretch">
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '59%' }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Employment</strong>
                    </Typography>
                    <Divider sx={{ borderBottomWidth: 2, borderColor: '#000000', marginTop: 1 }} />
                    <Stack direction="column" spacing={1}>
                      {DATA.histories.employment.map((job, index) => (
                        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                              {job.employer}
                            </Typography>
                            <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                              {job.position}
                            </Typography>
                          </Box>
                          <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="caption">{job.from}</Typography>
                          </Box>
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                  <Divider orientation="vertical" flexItem sx={{ borderColor: '#000000', borderWidth: 1 }} />
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '42%' }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Objective</strong>
                    </Typography>
                    <Divider sx={{ borderBottomWidth: 2, borderColor: '#000000', marginTop: 1 }} />
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                      {DATA.employee.biodata?.profile || 'No profile available.'}
                    </Typography>
                    <Typography variant="body2" sx={{ pt: 2 }}>
                      <strong>Back-end developer:</strong><br />
                      java, Cotlin, Laravel, NextJS
                    </Typography>
                    <Typography variant="body2" sx={{ pt: 1 }}>
                      <strong>Front-end developer:</strong><br />
                      ReactJS, NextJS, html,css
                    </Typography>
                    <Typography variant="body2" sx={{ pt: 1 }}>
                      <strong>Database:</strong><br />
                      MySQL, MongoDB
                    </Typography>
                    <Typography variant="body2" sx={{ pt: 1 }}>
                      <strong>I also have skills in:</strong><br />
                      UI/UX Design, Grapich design,QA Enginer
                    </Typography>

                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Personal Detail</strong>
                    </Typography>
                    <Divider sx={{ borderBottomWidth: 2, borderColor: '#000000', marginTop: 0 }} />
                    <Table size="small">
                      <TableBody>
                        <TableRow>
                          <TableCell sx={{ p: 0, border: 0 }}>
                            <Typography variant="body2">
                              <strong>Place of Birth:</strong> {DATA.employee.biodata?.placeOfBirth || 'N/A'}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0, border: 0 }}>
                            <Typography variant="body2">
                              <strong>Gender:</strong> {DATA.employee.biodata?.gender || 'N/A'}
                            </Typography>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ p: 0, border: 0 }}>
                            <Typography variant="body2">
                              <strong>Date of Birth:</strong> {DATA.employee.biodata?.dateOfBirth || 'N/A'}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ p: 0, border: 0 }}>
                            <Typography variant="body2">
                              <strong>Language:</strong> {DATA.employee.biodata?.language || 'N/A'}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Stack>
                </Stack>

                <Stack direction="row" spacing={3} justifyContent="stretch" sx={{ pb: 2, pageBreakAfter: 'always' }}>
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%' }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Course, Training</strong>
                    </Typography>
                    <Divider sx={{ borderBottomWidth: 2, borderColor: '#000000', marginTop: 1 }} />
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          {['No', 'Title', 'Provider', 'Date', 'Duration', 'Certificate'].map((o) => (
                            <TableCell key={o} sx={{ p: 1 }}>
                              <Typography variant="caption">
                                <strong>{o}</strong>
                              </Typography>
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {DATA.histories.certification.map((o, i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ p: 1 }}>
                              <Typography variant="caption">{i + 1}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 1 }}>
                              <Typography variant="caption">{o.title}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.provider}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 1 }}>
                              <Typography variant="caption">{o.date}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 1 }}>
                              <Typography variant="caption">{o.duration}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 1 }}>
                              <Typography variant="caption">{o.certificate}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Stack>
                  <Divider orientation="vertical" flexItem sx={{ borderColor: '#000000', borderWidth: 1 }} />
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%' }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Education</strong>
                    </Typography>
                    <Divider sx={{ borderBottomWidth: 2, borderColor: '#000000', marginTop: 1 }} />
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          {['School', 'Degree', 'Subject', 'From', 'To'].map((o) => (
                            <TableCell key={o} sx={{ p: 0 }}>
                              <Typography variant="caption">
                                <strong>{o}</strong>
                              </Typography>
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {DATA.histories.education.map((o, i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.school}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 2 }}>
                              <Typography variant="caption">{o.degree}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 0 }}>
                              <Typography variant="caption">{o.subject}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 1 }}>
                              <Typography variant="caption">{o.from}</Typography>
                            </TableCell>
                            <TableCell sx={{ p: 1 }}>
                              <Typography variant="caption">{o.to}</Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Stack>
                </Stack>

                {/* Divider */}
                <Divider sx={{ borderBottomWidth: 0, borderColor: '#000000', marginTop: 2, marginBottom: 2 }} />

                <Stack direction="row" spacing={3} justifyContent="stretch" sx={{ pt: 2 }}>
                  <Stack direction="column" spacing={2} sx={{ flexBasis: '100%' }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Project</strong>
                    </Typography>
                    {DATA.histories.project.map((o, i) => (
                      <Box key={i} sx={{ pt: 2, pb: 4, borderBottom: '2px solid #e0e0e0' }}>
                        <Stack direction="row" spacing={2}>
                          <Chip
                            label={`${i + 1}.`}
                            sx={{
                              flexBasis: 50,
                              bgcolor: '#FFFFFF',
                              fontWeight: 'bold',
                              color: '#000'
                            }}
                          />
                          <Table size="small" sx={{ width: '100%' }}>
                            <TableBody>
                              <TableRow>
                                <TableCell sx={{ width: 165, p: 0, bgcolor: '#d9d9d9' }}>
                                  <Typography variant="caption">
                                    <strong>Project Name :</strong>
                                  </Typography>
                                </TableCell>
                                <TableCell colSpan={5} sx={{ p: 0 }}>
                                  <Typography variant="body2"><strong>{o.projectName}</strong></Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell sx={{ p: 0, bgcolor: '#d9d9d9' }}>
                                  <Typography variant="caption">
                                    <strong>Role :</strong>
                                  </Typography>
                                </TableCell>
                                <TableCell sx={{ p: 0 }}>
                                  <Typography variant="body2">{o.role}</Typography>
                                </TableCell>
                                <TableCell sx={{ width: 30, p: 0, bgcolor: '#d9d9d9' }}>
                                  <Typography variant="caption">
                                    <strong>From:</strong>
                                  </Typography>
                                </TableCell>
                                <TableCell sx={{ width: 80, p: 0 }}>
                                  <Typography variant="body2">{o.from}</Typography>
                                </TableCell>
                                <TableCell sx={{ width: 30, p: 0, bgcolor: '#d9d9d9' }}>
                                  <Typography variant="caption">
                                    <strong>To:</strong>
                                  </Typography>
                                </TableCell>
                                <TableCell sx={{ width: 80, p: 0 }}>
                                  <Typography variant="body2">{o.to}</Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell sx={{ p: 0, bgcolor: '#d9d9d9' }}>
                                  <Typography variant="caption">
                                    <strong>Customer :</strong>
                                  </Typography>
                                </TableCell>
                                <TableCell colSpan={5} sx={{ p: 0 }}>
                                  <Typography variant="body2">{o.customer}</Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell sx={{ p: 0, bgcolor: '#d9d9d9' }}>
                                  <Typography variant="caption">
                                    <strong>Project Desc :</strong>
                                  </Typography>
                                </TableCell>
                                <TableCell colSpan={5} sx={{ p: 0 }}>
                                  <Typography variant="body2">{o.projectDescription}</Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell sx={{ p: 0, bgcolor: '#d9d9d9' }}>
                                  <Typography variant="caption">
                                    <strong>Technical Info :</strong>
                                  </Typography>
                                </TableCell>
                                <TableCell colSpan={5} sx={{ p: 0 }}>
                                  <Typography variant="body2">{o.technicalInformation}</Typography>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell sx={{ p: 0, bgcolor: '#d9d9d9' }}>
                                  <Typography variant="caption">
                                    <strong>Job Description :</strong>
                                  </Typography>
                                </TableCell>
                                <TableCell colSpan={5} sx={{ p: 0 }}>
                                  <Typography variant="body2">
                                    <ul>
                                      {o.jobDescription.split('\n').map((desc, idx) => (
                                        <li key={idx}>{desc}</li>
                                      ))}
                                    </ul>
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </Stack>
                      </Box>
                    ))}


                  </Stack>
                </Stack>
                <Typography variant="caption" color="GrayText" sx={{ pt: 4, alignSelf: 'center' }}>
                  PT Padepokan Tujuh Sembilan
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box component="tfoot">
          <Box component="tr">
            <Box component="td">
              <Box className="page-footer-space" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page;
