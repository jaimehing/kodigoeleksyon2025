
import { positions, Candidate, Position } from '@/lib/positions';

/**
 * Props for the BallotPositionCard component
 */
export interface BallotPositionCardProps {
  /** Position ID to display candidates for */
  positionId: string;
  /** Array of selected candidates for this position */
  selectedCandidates: Candidate[];
}

/**
 * Component that displays a single position and its selected candidates
 */
const BallotPositionCard: React.FC<BallotPositionCardProps> = ({ 
  positionId, 
  selectedCandidates 
}) => {
  const position: Position | undefined = positions.find(p => p.id === positionId);
  
  if (!position) return null;
  
  return (
    <div className="p-6">
      <h3 className="font-medium mb-4">{position.title}</h3>
      
      {selectedCandidates.length > 0 ? (
        <div className="space-y-3">
          {selectedCandidates.map(candidate => (
            <div 
              key={candidate.id}
              className="flex items-center p-3 rounded-lg bg-background border border-border"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                <span className="font-medium text-primary">
                  {candidate.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-medium">{candidate.name}</div>
                <div className="text-sm text-muted-foreground">{candidate.party}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-4 rounded-lg bg-muted/30 text-muted-foreground text-sm">
          No candidates selected for this position
        </div>
      )}
    </div>
  );
};

export default BallotPositionCard;
