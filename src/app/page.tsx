import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';

interface ProjectTitleProps {
  title: string;
}

interface SectionTitleProps {
  title: string;
}

const DATA = {
  employee: {
    name: 'BAGAS PRAKASA',
    position: 'DATA ENGINEER LEAD',
    email: 'bagas.prakasa19@gmail.com',
    phone: '+62 822-4601-8381',
    linkedin: 'linkedin.com/in/bagasprakasa',
  },
  skills: [
    "Programming Languages: Python, SQL",
    "Data Ingestion and Orchestration: Apache Airflow, Fivetran, Airbyte, Talend",
    "Data Warehousing: BigQuery, Snowflake, Alibaba Maxcompute, AWS Redshift, Clickhouse",
    "Transformation tools: dbt, Alibaba Dataworks",
    "Big Data Technologies: Apache Spark (Pyspark), Apache Kafka, Hadoop, Hive",
    "Data Model: Kimball Dimensional Modeling, One Big Table (OBT)",
    "Cloud Platforms: AWS, Google Cloud Platform (GCP), Microsoft Azure, Alibaba Cloud",
    "Database Management Systems: PostgreSQL, MySQL, MongoDB",
    "Version Control: GitHub, Bitbucket, GitLab",
    "Data Visualization: Tableau, Looker, Power BI",
    "Product Thinking: Jira, Confluence"
  ],
  employment: [
    {
      company: 'DANA Indonesia',
      location: 'Jakarta, Indonesia',
      summary: 'DANA is the biggest fintech company in Indonesia that has 170+ million registered users and 20k+ merchants, the top #1 fintech application on Google Play store Indonesia in 2022 - 2023.',
      skills: 'Skills: Python, Pandas, SQL, Airflow, Kubernetes, Tableau, Hadoop, Hive, Spark, Data Warehouse, BigQuery, GCP, Alibaba Cloud, Bitbucket, GitLab',
      positions: [
        {
          title: 'Data Engineer Lead',
          duration: 'Jul 2023 - Present',
          details: [
            {
              projectTitle: 'Redesigned Data Warehouse Model from OBT (One Big Table) to Dimensional Data Model',
              bullets: [
                "Led technical design discussions with 10 members of the Backend Engineer, 3 members of the Business and Financial team, and 8 members of the Data team to define the new Data warehouse model.",
                "Deployed 20 Facts and 10 Dim tables using the Kimball Dimensional Data Model, reduced business category and financial tables from 150+ to 30 tables, increased 80% Personally Identifiable Information (PII) data visibility, and saved costs up to $200k per year."
              ]
            }
          ]
        },
        {
          title: 'Senior Data Engineer',
          duration: 'Jan 2021 - Dec 2023 (2 yr 6 mos)',
          details: [
            {
              projectTitle: 'Migrated On-premise Data warehouse to Cloud Data Warehouse',
              bullets: [
                "Led technical architecture discussions with the 2 Infrastructure Engineers and 4 Data Engineers to design the migration plan.",
                <>
                  Sorted high-priority tables from 300 to 150 tables and migrated these tables from Hadoop on-premise to Maxcompute data warehouse using Python, Rclone, and Airflow, decreased storage size from 5 Petabytes to 1 Petabyte and <strong>saved costs up to $500k per year</strong>.
                </>,
               <>Optimized skew tables and refactored 70+ queries of business category reports, increased time efficiency from an average of 7+ hours to less than 2 hours, and  <strong>reduced costs up to $132k per year</strong>. </>,
              ]
            }
          ]
        },
        {
          title: 'Data Engineer',
          duration: 'Apr 2019 - Dec 2020 (1 yr 9 mos)',
          details: [
            {
              projectTitle: 'Built End-to-End Data Platform from scratch',
              bullets: [
                <>Ideated and developed a new EL platform using Python and Airflow to extract 250+ tables every day, boosted processing time to less than 30 min from an average of 5+ hours, <strong>prevented loss up to $30k per year.</strong>  </>,
                <>Built and optimized OBT (One Big Table) data warehouse using Hive and Spark to serve 20k+ merchant settlement reports every day, <strong>escalated performance to less than 2 hours from an average of 6+ hours.</strong></>,
                <>Designed a new data visualization platform using Tableau server to serve 100+ Executive Committee dashboards used by 200+ employees. <strong>This improved the Data Analyst Team's productivity by 50%.</strong></>,
              ]
            }
          ]
        }
      ]
    },
    {
      company: 'Ruangguru',
      location: 'Jakarta, Indonesia',
      summary: 'Ruangguru is the largest education technology company in Southeast Asia with 40+ million users in Indonesia, Vietnam, and Thailand. Ruangguru offers many technology-based education services, such as subscription-based learning videos, live teaching, learning management systems for schools, online soft skills training, and corporate training platforms.',
      skills: 'Skills: Python, ElasticSearch, MySQL, Kubernetes, ETL',
      positions: [
        {
          title: 'Data Engineer',
          duration: 'Nov 2018 - Mar 2019 (5 mos)',
          details: [
            {
              projectTitle: 'Revamped new Real-time Search on the Ruangguru Payment Platform',
              bullets: [
                "Coordinated with the Backend Engineers to design the Ruangguru Payment architecture.",
                "Developed a new data model for Ruangguru Payment to tackle real-time search service, and enhanced data extraction speed from 10k records per second to 100k records per second.",
                "Deployed and tested ETL Python script to sync data from MySQL to Elasticsearch on Kubernetes."
              ]
            }
          ]
        }
      ]
    },
    {
      company: 'Jakarta Smart City',
      location: 'Jakarta, Indonesia',
      summary: 'Jakarta Smart City is the Jakarta Government\'s application of smart city concepts that optimize the utilization of ICT to know, understand, and control various resources in the city more effectively and efficiently to maximize public services, provide solutions, and support sustainable development.',
      skills: 'Skills: Python, PySpark, Hadoop, Hive, Tableau, IBM Netezza, IBM Cognos, IBM Datastage',
      positions: [
        {
          title: 'Data Engineer',
          duration: 'Nov 2017 - Oct 2018 (1 yr)',
          details: [
            {
              projectTitle: 'Collected Data and helped Data Scientists serve the Flood Prediction Model',
              bullets: [
                "Collected and cleaned data related to Transportation, Population, and Environment of Jakarta city using IBM Datastage, Python, and Pyspark to help Data Scientists serve flood prediction models. This improved the Data Scientist Team's productivity by 80%.",
                "Designed a new data visualization platform using Tableau server to serve 20+ dashboards used by the Jakarta Government and increased the Data Analyst Team's productivity by 50%."
              ]
            }
          ]
        }
      ]
    },
    {
      company: 'Digital Skola',
      location: 'Jakarta, Indonesia',
      summary: 'Digital Skola is an edu-tech platform that helps professionals improve their competencies and knowledge relevant to today\'s industry through blended learning and real-experience internship programs. Digital Skola has more than 2600 students and alumni.',
      skills: 'Skills: Python, SQL, Snowflake, GCP, BigQuery, dbt, MongoDB, Hadoop, Spark, Airflow, Kafka, Data Visualisation, Ansible, Kubernetes, Linux, Git, Looker, Tableau',
      positions: [
        {
          title: 'Data Engineer Trainer',
          duration: 'Sep 2021 - Present',
          details: [
            {
              projectTitle: 'Data Engineering Bootcamp',
              bullets: [
                "Formulated and delivered 16 batches (3 months/batch) of Data Engineering Bootcamp courses for general students and enterprise students, successfully converting 70+ from 349 students to become Data Engineer Professional.",
                "Helped students build their Data Engineer portfolio using Modern Data Stacks such as Python, Airflow, SQL, and Snowflake or BigQuery."
              ]
            },
            {
              projectTitle: 'DevOps Engineering Bootcamp',
              bullets: [
                "Delivered a batch of DevOps Engineering Bootcamp courses for general students and enterprise students, successfully converting 5 from 8 students to become DevOps Engineer Professional."
              ]
            }
          ]
        }
      ]
    },
    {
      company: 'SHIFT ACADEMY',
      location: 'Jakarta, Indonesia',
      summary: 'Shift Academy is a platform that focuses on helping enterprises learn and improve their technologies and giving coaching about Data Engineering, Data Science, Software Engineering, etc. Shift Academy has reached 1,200+ Employee Trainings and created 200+ Solutions.',
      skills: 'Skills: Python, Airflow, Spark, Hadoop, Debezium and Kafka.',
      positions: [
        {
          title: 'Data Engineer Trainer',
          duration: 'May 2023 - Jun 2023 (2 mos)',
          details: [
            {
              projectTitle: 'Coached one of the biggest Banks in Indonesia employees about Enterprise Big Data Platform',
              bullets: [
                "Coached 10+ employees from one of the biggest banks in Indonesia and delivered Big Data Platform Best Practices on the Enterprise Level, successfully designed their platform using Airflow, Spark, Hadoop, Debezium, and Kafka.",
              ]
            }
          ]
        }
      ]
    }
  ],
  education: [
    {
      degree: 'Bachelor of Applied Science',
      school: 'Universitas Gadjah Mada',
      duration: '2013 - 2017',
    }
  ],
  certifications: [
    'Astronomer Certification DAG Authoring for Apache Airflow (2024)',
    'Databricks Lakehouse Fundamentals (2023)',
    'Astronomer Certification for Apache Airflow Fundamentals (2021)',
    'Alibaba Cloud Associate - Cloud Security Certification (2021)',
    'Alibaba Cloud Associate - Cloud Computing Certification (2021)',
    'Alibaba Cloud Associate - System Operator Certification (2021)',
    'Alibaba Cloud Associate - Database Certification (2021)',
    'Alibaba Cloud Associate - Big Data Certification (2018)',
  ]
};

const SectionTitle = ({ title }: SectionTitleProps) => (
  <Box sx={{ marginBottom: '8px', marginTop: '8px' }}>
    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000', textTransform: 'uppercase', fontSize: '14px', marginBottom: '5px' }}>
      {title}
    </Typography>
    <Divider sx={{ borderColor: '#000', borderWidth: '1px' }} />
  </Box>
);

const Skills = () => (
  <Box sx={{ padding: '0px 0' }}>
    <SectionTitle title="Skills" />
    <Box>
      {DATA.skills.map((skill, index) => (
        <Typography key={index} variant="body2" sx={{ color: '#000', fontSize: '16px', lineHeight: 1.5, marginBottom: '4px' }}>  {/* Font diperbesar lagi */}
          {skill}
        </Typography>
      ))}
    </Box>
  </Box>
);

const ProjectTitle = ({ title }: ProjectTitleProps) => (
  <Box sx={{ display: 'inline-block' }}>
    <Typography variant="body2" sx={{ color: '#000', fontSize: '15px', lineHeight: 1.5 }}>  {/* Font diperbesar lagi */}
      {title}
    </Typography>
    <Divider sx={{
      borderColor: '#000',
      marginTop: '5px',
      marginBottom: '12px',
      width: '100%',
      height: '1px'
    }} />
  </Box>
);

const ProfessionalExperience = () => {
  return (
    <Box sx={{ padding: '5px 0' }}>
      <SectionTitle title="Professional Experience" />

      {DATA.employment.map((job, index) => (
        <Box key={index} sx={{ marginBottom: '15px' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000', fontSize: '16px' }}>  {/* Font diperbesar lagi */}
              {job.company}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000', fontSize: '16px', whiteSpace: 'nowrap' }}>  {/* Font diperbesar lagi */}
              {job.location}
            </Typography>
          </Stack>

          <Typography variant="body2" sx={{ color: '#000', fontSize: '15px', marginBottom: '5px', marginTop: '5px' }}>  {/* Font diperbesar lagi */}
            {job.summary}
          </Typography>

          <Typography variant="body2" sx={{ color: '#000', fontSize: '15px', marginBottom: '10px', fontStyle: 'italic' }}>  {/* Font diperbesar lagi */}
            {job.skills}
          </Typography>

          {job.positions.map((position, idx) => (
            <Box key={idx} sx={{ marginTop: '8px', marginBottom: '8px' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ marginBottom: '2px' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000', fontSize: '15px' }}>  {/* Font diperbesar lagi */}
                  {position.title}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000', fontSize: '15px', whiteSpace: 'nowrap' }}>  {/* Font diperbesar lagi */}
                  {position.duration}
                </Typography>
              </Stack>

              {position.details.map((detail, i) => (
                <Box key={i} sx={{ marginTop: '8px', marginBottom: '8px' }}>
                  <ProjectTitle title={detail.projectTitle} />
                  <ul style={{ paddingLeft: '20px', marginTop: '0' }}>
                    {detail.bullets.map((bullet, j) => (
                      <li key={j} style={{ marginBottom: '5px' }}>
                        <Typography variant="body2" sx={{ color: '#000', fontSize: '15px', lineHeight: 1.5 }}>  {/* Font diperbesar lagi */}
                          {bullet}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

const Education = () => (
  <Box sx={{ marginTop: '10px' }}>
    <SectionTitle title="Education" />
    {DATA.education.map((edu, index) => (
      <Box key={index} sx={{ marginBottom: '6px' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000', fontSize: '12px' }}>
          {edu.degree}
        </Typography>
        <Typography variant="body1" sx={{ color: '#000', marginTop: '3px', fontSize: '12px' }}>
          {edu.school} - {edu.duration}
        </Typography>
      </Box>
    ))}
  </Box>
);

const Certifications = () => (
  <Box sx={{ marginTop: '10px' }}>
    <SectionTitle title="Certifications" />
    <ul style={{ paddingLeft: '22px', margin: 0 }}>
      {DATA.certifications.map((cert, index) => (
        <li key={index} style={{ marginBottom: '3px', listStyle: 'disc', fontWeight: 'bold' }}>
          <Typography variant="body2" sx={{ color: '#000', fontSize: '12px', lineHeight: 1.5, marginLeft: '-10px' }}>
            {cert}
          </Typography>
        </li>
      ))}
    </ul>
  </Box>
);

const Page = () => {
  return (
    <Box sx={{ padding: '30px', fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', lineHeight: 1.5 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: 'center', marginBottom: '10px' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#000', textTransform: 'uppercase', fontSize: '18px', letterSpacing: '1.2px' }}>
          BAGAS PRAKASA
        </Typography>
        <Typography variant="h6" sx={{ color: '#000', marginTop: '2px', fontSize: '14px' }}>
          DATA ENGINEER LEAD
        </Typography>
        <Typography variant="body1" sx={{ color: '#000', marginTop: '2px', fontSize: '11px' }}>
          bagas.prakasa19@gmail.com • +62 822-4601-8381 • linkedin.com/in/bagasprakasa
        </Typography>
      </Box>

      {/* Skills Section */}
      <Skills />

      {/* Professional Experience Section */}
      <ProfessionalExperience />

      {/* Education Section */}
      <Education />

      {/* Certifications Section */}
      <Certifications />
    </Box>
  );
};

export default Page;
