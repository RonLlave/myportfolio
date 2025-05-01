// lib/utils.jsx
export function getSkillIcon(icon) {
  const icons = {
    html5: '🟠',
    css3: '🔵',
    javascript: '🟡',
    react: '⚛️',
    nodejs: '🟢',
    nextjs: '⚫',
    tailwind: '💨',
    dotnet: '🔷',
    csharp: '💠',
    mssql: '🔳',
    mysql: '🐬',
    supabase: '🟩',
    azure: '🔷',
    git: '🟥'
  };
  
  return icons[icon] || '🔧';
}