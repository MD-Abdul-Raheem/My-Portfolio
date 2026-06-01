import {
  SiC,
  SiClaude,
  SiCplusplus,
  SiCss,
  SiGooglegemini,
  SiMysql,
  SiN8N,
  SiOpenai,
  SiPython,
  SiReact,
} from 'react-icons/si'
import {
  BarChart3,
  BrainCircuit,
  Code,
  FileSpreadsheet,
  FileText,
  Presentation,
  Sigma,
  Workflow,
} from 'lucide-react'
import { AmazonQIcon, AwsIcon, GoogleAIStudioIcon, OracleIcon } from '../components/SkillBrandIcons'

export const skillGroups = [
  {
    title: 'GenAI & AI Tools',
    items: [
      { name: 'Prompt Engineering', icon: BrainCircuit, color: '#A855F7' },
      { name: 'ChatGPT', icon: SiOpenai, color: '#10A37F' },
      { name: 'Gemini', icon: SiGooglegemini, color: '#8AB4F8' },
      { name: 'Claude', icon: SiClaude, color: '#F97316' },
      { name: 'Google AI Studio', icon: GoogleAIStudioIcon, color: '#4285F4', multicolor: true },
      { name: 'Amazon Q', icon: AmazonQIcon, color: '#FF9900' },
      { name: 'n8n', icon: SiN8N, color: '#EA4B71' },
    ],
  },
  {
    title: 'Cloud',
    items: [
      { name: 'AWS', icon: AwsIcon, color: '#FF9900', multicolor: true },
      { name: 'Oracle Fundamentals', icon: OracleIcon, color: '#F80000' },
      { name: 'DevOps basics', icon: Workflow, color: '#00D4FF' },
    ],
  },
  {
    title: 'Programming',
    items: [
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Java', icon: Code, color: '#F89820' },
    ],
  },
  {
    title: 'Data Analytics',
    items: [
      { name: 'EDA', icon: BarChart3, color: '#00B8D9' },
      { name: 'Statistical Analysis', icon: Sigma, color: '#A855F7' },
      { name: 'Data Preprocessing', icon: Workflow, color: '#14B8A6' },
    ],
  },
  {
    title: 'Productivity Tools',
    items: [
      { name: 'MS Office', icon: FileText, color: '#D83B01' },
      { name: 'Excel Pivot Tables', icon: FileSpreadsheet, color: '#217346' },
      { name: 'Excel Charts', icon: BarChart3, color: '#217346' },
      { name: 'PowerPoint', icon: Presentation, color: '#B7472A' },
      { name: 'Word', icon: FileText, color: '#2B579A' },
      { name: 'Tableau', icon: BarChart3, color: '#4E79A7' },
      { name: 'Power BI', icon: BarChart3, color: '#F2C811' },
    ],
  },
  {
    title: 'Web Development',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'HTML & CSS', icon: SiCss, color: '#E34F26' },
      { name: 'Web Development', icon: Code, color: '#06B6D4' },
    ],
  },
]

export const skillIconFallbacks = [
  'AWS',
  'Amazon Q',
  'Oracle Fundamentals',
  'Java',
  'EDA',
  'Statistical Analysis',
  'Data Preprocessing',
  'MS Office',
  'Excel Pivot Tables',
  'Excel Charts',
  'PowerPoint',
  'Word',
  'Tableau',
  'Power BI',
  'Web Development',
]

export const skills = skillGroups
