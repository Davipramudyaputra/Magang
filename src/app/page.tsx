"use client";

import React, { useState } from 'react';
import './global.css';
import { Avatar, Box, Divider, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, TextField, Button } from '@mui/material';

// Interfaces for data types
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

interface DataType {
  employee: {
    name: string;
    position: string;
    email: string;
    phone: string;
    image: string;
    biodata: {
      profile: string;
      objective: string;
      placeOfBirth: string;
      dateOfBirth: string;
      gender: string;
    };
  };
  histories: {
    employment: {
      employer: string;
      position: string;
      from: string;
      to: string;
    }[];
    certification: {
      title: string;
      provider: string;
      date: string;
      duration: string;
      certificate: string;
    }[];
    education: {
      school: string;
      degree: string;
      subject: string;
      from: string;
      to: string;
      GPA?: string;
    }[];
    project: Project[];
  };
}

// Template JSON to guide users
const jsonTemplate = `
{
  "employee": {
    "name": "Your Name",
    "position": "Your Position",
    "email": "Your Email",
    "phone": "Your Phone",
    "image": "Image URL",
    "biodata": {
      "profile": "Your profile description",
      "objective": "Your objectives or skills",
      "placeOfBirth": "Place of Birth",
      "dateOfBirth": "YYYY-MM-DD",
      "gender": "Male/Female"
    }
  },
  "histories": {
    "employment": [
      {
        "employer": "Employer Name",
        "position": "Position",
        "from": "Start Year",
        "to": "End Year or Present"
      }
    ],
    "certification": [
      {
        "title": "Certification Title",
        "provider": "Provider",
        "date": "Completion Date",
        "duration": "Duration",
        "certificate": "Yes/No"
      }
    ],
    "education": [
      {
        "school": "School Name",
        "degree": "Degree",
        "subject": "Subject",
        "from": "Start Year",
        "to": "End Year",
        "GPA": "GPA (optional)"
      }
    ],
    "project": [
      {
        "projectName": "Project Name",
        "role": "Your Role",
        "from": "Start Date",
        "to": "End Date or Present",
        "customer": "Customer",
        "projectDescription": "Brief description of the project",
        "technicalInformation": "Technical info or tools used",
        "jobDescription": "Your responsibilities in the project"
      }
    ]
  }
}
`;

// Project Section Component
const ProjectSection = ({ projects }: { projects: Project[] }) => {
  return (
    <Stack direction="column" spacing={2} sx={{ width: '100%', pb: 4 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold', pt: 1 }}>
        PROJECT
      </Typography>
      <Box
        sx={{
          width: '100%',
          borderCollapse: 'collapse',
          marginTop: '16px',
          padding: '0',
        }}
      >
        <Table className="project-table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <TableHead
                className="project-heading"
                sx={{
                  pageBreakInside: 'avoid',
                  pageBreakBefore: index !== 0 ? 'always' : 'auto'
                }}
              >
                <TableRow>
                  <TableCell className="shaded-project-heading" colSpan={1}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {index + 1}. Project Name:
                    </Typography>
                  </TableCell>
                  <TableCell className="shaded-project-heading" colSpan={5}>
                    <Typography variant="body2">
                      <strong>{project.projectName}</strong>
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ pageBreakInside: 'avoid' }}>
                <TableRow>
                  <TableCell className="shaded-cell">
                    <Typography variant="body2">Role:</Typography>
                  </TableCell>
                  <TableCell className="white-background">
                    <Typography variant="body2">{project.role}</Typography>
                  </TableCell>
                  <TableCell className="from-to-label">
                    <Typography variant="body2">From:</Typography>
                  </TableCell>
                  <TableCell className="shaped-cell white-background">
                    <Typography variant="body2">{project.from}</Typography>
                  </TableCell>
                  <TableCell className="from-to-label">
                    <Typography variant="body2">To:</Typography>
                  </TableCell>
                  <TableCell className="shaped-cell white-background">
                    <Typography variant="body2">{project.to}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="shaded-cell">
                    <Typography variant="body2">Customer:</Typography>
                  </TableCell>
                  <TableCell className="white-background" colSpan={5}>
                    <Typography variant="body2">{project.customer}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="shaded-cell">
                    <Typography variant="body2">Project Desc:</Typography>
                  </TableCell>
                  <TableCell className="white-background" colSpan={5}>
                    <Typography variant="body2">{project.projectDescription}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="shaded-cell">
                    <Typography variant="body2">Technical Info:</Typography>
                  </TableCell>
                  <TableCell className="white-background" colSpan={5}>
                    <Typography variant="body2">{project.technicalInformation}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="shaded-cell">
                    <Typography variant="body2">Job Description:</Typography>
                  </TableCell>
                  <TableCell className="white-background" colSpan={5}>
                    <ul>
                      {project.jobDescription.split('\n').map((desc, idx) => (
                        <li key={idx}>
                          <Typography variant="body2">{desc}</Typography>
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                </TableRow>
              </TableBody>
            </React.Fragment>
          ))}
        </Table>
      </Box>
    </Stack>
  );
};

// Education and Certification Section
const EducationAndCertification = ({ data }: { data: DataType }) => (
  <Stack direction="row" spacing={3} justifyContent="stretch" sx={{ pb: 2, pageBreakAfter: 'always' }}>
    <Stack direction="column" spacing={1} sx={{ flexBasis: '50%' }}>
      <Typography variant="body1" sx={{ pt: 1 }}>
        <strong>Course, Training</strong>
      </Typography>
      <Divider sx={{ borderBottomWidth: 2, borderColor: '#000000', marginTop: 1 }} />
      <Table size="small">
        <TableHead>
          <TableRow>
            {['No', 'Title', 'Provider', 'Date', 'Duration', 'Certificate'].map((header) => (
              <TableCell key={header} sx={{ p: 1 }}>
                <Typography variant="caption">
                  <strong>{header}</strong>
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.histories.certification.map((certification, index) => (
            <TableRow key={index}>
              <TableCell sx={{ p: 1 }}>
                <Typography variant="caption">{index + 1}</Typography>
              </TableCell>
              <TableCell sx={{ p: 1 }}>
                <Typography variant="caption">{certification.title}</Typography>
              </TableCell>
              <TableCell sx={{ p: 1 }}>
                <Typography variant="caption">{certification.provider}</Typography>
              </TableCell>
              <TableCell sx={{ p: 1 }}>
                <Typography variant="caption">{certification.date}</Typography>
              </TableCell>
              <TableCell sx={{ p: 1 }}>
                <Typography variant="caption">{certification.duration}</Typography>
              </TableCell>
              <TableCell sx={{ p: 1 }}>
                <Typography variant="caption">{certification.certificate}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
    <Divider orientation="vertical" flexItem sx={{ borderColor: '#000000', borderWidth: 1 }} />
    <Stack direction="column" spacing={1} sx={{ flexBasis: '58%' }}>
      <Typography variant="body1" sx={{ pt: 1 }}>
        <strong>Education</strong>
      </Typography>
      <Divider sx={{ borderBottomWidth: 2, borderColor: '#000000', marginTop: 1 }} />
      <Table size="small">
        <TableHead>
          <TableRow>
            {['School', 'Degree', 'Subject', 'From', 'To'].map((header) => (
              <TableCell key={header} sx={{ p: 0 }}>
                <Typography variant="caption">
                  <strong>{header}</strong>
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.histories.education.map((education, index) => (
            <TableRow key={index}>
              <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{education.school}</Typography>
              </TableCell>
              <TableCell sx={{ p: 2 }}>
                <Typography variant="caption">{education.degree}</Typography>
              </TableCell>
              <TableCell sx={{ p: 0 }}>
                <Typography variant="caption">{education.subject}</Typography>
              </TableCell>
              <TableCell sx={{ p: 1 }}>
                <Typography variant="caption">{education.from}</Typography>
              </TableCell>
              <TableCell sx={{ p: 1 }}>
                <Typography variant="caption">{education.to}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  </Stack>
);

// Main Page Component
const Page = () => {
  const [data, setData] = useState<DataType | null>(null);
  const [jsonInput, setJsonInput] = useState<string>('');

  const handleJsonSubmit = () => {
    try {
      const parsedData = JSON.parse(jsonInput);
      setData(parsedData);
    } catch (error) {
      alert('Invalid JSON format. Please check and try again.');
    }
  };

  return (
    <>
      <Box className="page-header">
        <img src="/Header.png" alt="" width="100%" height="50px" />
        <Box component="img" src="/Logo.svg" alt="" sx={{ height: 45, position: 'absolute', top: 58, left: 70 }} />
      </Box>
      <Box className="page-footer">
        <img src="/Footer.png" alt="" width="100%" height="60px" />
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
              {/* JSON Input Area */}
              <Box sx={{ p: 2, width: '100%' }} className="no-print">
                <Typography variant="h6">Paste JSON Data</Typography>
                <Box
                  sx={{
                    p: 2,
                    backgroundColor: '#f0f0f0',
                    borderRadius: '8px',
                    mb: 2,
                    fontFamily: 'monospace',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {jsonTemplate}
                </Box>
                <TextField
                  label="Input JSON"
                  multiline
                  rows={10}
                  variant="outlined"
                  fullWidth
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                />
                <Button sx={{ mt: 2 }} variant="contained" color="primary" onClick={handleJsonSubmit}>
                  Submit
                </Button>
              </Box>

              {/* CV Output Area */}
              {data && (
                <>
                  <Stack direction="column" spacing={3} alignItems="stretch">
                    <Stack direction="row" alignItems="center">
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" sx={{ py: 1 }}>
                          <strong>{data?.employee.name || 'No Name'}</strong>
                        </Typography>
                        <Divider sx={{ borderBottomWidth: 2, borderColor: '#000000', marginTop: 1 }} />
                        <Typography variant="subtitle1">{data?.employee.position || 'No Position'}</Typography>
                        <Typography variant="subtitle2">{data?.employee.email || 'No Email'}</Typography>
                      </Box>
                      <Box>
                        <Avatar src={data?.employee.image || ''} sx={{ height: 150, width: 150 }}>
                          {data?.employee.image ? 'Talent Image' : 'No Image'}
                        </Avatar>
                      </Box>
                    </Stack>

                    <Stack direction="row" spacing={2} justifyContent="stretch">
                      {/* Employment Section */}
                      <Stack direction="column" spacing={1} sx={{ flexBasis: '50%' }}>
                        <Typography variant="body1" sx={{ pt: 1 }}>
                          <strong>Employment</strong>
                        </Typography>
                        <Divider sx={{ borderBottomWidth: 2, borderColor: '#000000', marginTop: 1 }} />
                        <Stack direction="column" spacing={1}>
                          {data?.histories.employment.map((job, index) => (
                            <Box
                              key={index}
                              sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                              }}
                            >
                              <Box>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                  {job.employer}
                                </Typography>
                                <Typography variant="caption" sx={{ fontStyle: 'italic' }}>
                                  {job.position}
                                </Typography>
                              </Box>
                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'flex-end',
                                  textAlign: 'right',
                                }}
                              >
                                <Typography variant="body2">
                                  {job.from} - {job.to ? job.to : 'Present'}
                                </Typography>
                              </Box>
                            </Box>
                          ))}
                        </Stack>
                      </Stack>

                      <Divider orientation="vertical" flexItem sx={{ borderColor: '#000000', borderWidth: 1 }} />

                      {/* Objective, Skills, and Personal Detail Section */}
                      <Stack direction="column" spacing={1} sx={{ flexBasis: '57%' }}>
                        <Typography variant="body1" sx={{ pt: 1 }}>
                          <strong>Objective</strong>
                        </Typography>
                        <Divider sx={{ borderBottomWidth: 2, borderColor: '#000000', marginTop: 1 }} />
                        <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                          {data?.employee.biodata?.profile || 'No profile available.'}
                        </Typography>

                        <Typography variant="body2" sx={{ pt: 2 }}>
                          <strong>Keahlian saya:</strong> {data?.employee.biodata?.objective || 'No skills listed.'}
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
                                  <strong>Place of Birth:</strong> {data?.employee.biodata?.placeOfBirth || 'N/A'}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ p: 0, border: 0 }}>
                                <Typography variant="body2">
                                  <strong>Gender:</strong> {data?.employee.biodata?.gender || 'N/A'}
                                </Typography>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell sx={{ p: 0, border: 0 }}>
                                <Typography variant="body2">
                                  <strong>Date of Birth:</strong> {data?.employee.biodata?.dateOfBirth || 'N/A'}
                                </Typography>
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Stack>
                    </Stack>

                    <EducationAndCertification data={data} />
                    <ProjectSection projects={data.histories.project} />
                  </Stack>
                </>
              )}

              {/* Updated Footer to Center */}
              <Typography variant="caption" color="GrayText" sx={{ pt: 4, textAlign: 'center', display: 'block' }}>
                PT Padepokan Tujuh Sembilan
              </Typography>
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
