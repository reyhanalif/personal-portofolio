export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Reyhan Alif Pradityo",
    "alternateName": "Reyhan Alif",
    "url": "https://pradityora.vercel.app",
    "jobTitle": "Data Scientist",
    "description": "Imperial College London MSc graduate specializing in Data Science and Analytics. 2+ years experience in digital banking at Bank Jago. Expert in environmental data science, geospatial analysis, and business intelligence.",
    "knowsAbout": [
      "Data Science",
      "Data Analytics",
      "Digital Banking",
      "Environmental Science",
      "Machine Learning",
      "Geospatial Analysis",
      "Business Intelligence",
      "Python Programming",
      "SQL",
      "Google Earth Engine",
      "BigQuery",
      "Airflow"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Imperial College London"
    },
    "worksFor": [
      {
        "@type": "Organization",
        "name": "Anglian Water"
      },
      {
        "@type": "Organization",
        "name": "Bank Jago"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/reyhan-alif-pradityo",
      "https://github.com/reyhanalif"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
