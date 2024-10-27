import './style.css';

interface ProgressProps {
  progress: number;
  size?: number;
  strokeWidth?: number;
  circleColor?: string;
  progressColor?: string;
  logo?: string;
}

export default function Progress({
  progress,
  size = 100,
  strokeWidth = 4,  // 将边框宽度减小到4
  circleColor = '#e0e0e0',
  progressColor = '#3f51b5',
  logo = 'https://blog.luckfunc.com/avatar.png'
}: ProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className='progress-circle'>
      <svg width={size} height={size}>
        <circle
          className='progress-circle-bg'
          stroke={circleColor}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill='none'
        />
        <circle
          className='progress-circle-progress'
          stroke={progressColor}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          fill='none'
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <img 
        src={logo} 
        alt='logo' 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 92,
          height: 92,
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
