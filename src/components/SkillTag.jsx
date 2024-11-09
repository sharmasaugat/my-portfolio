const SkillTag = ({ skill }) => (
    <span className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-sm border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 transition-all cursor-pointer">
      {skill}
    </span>
  );

export default SkillTag;