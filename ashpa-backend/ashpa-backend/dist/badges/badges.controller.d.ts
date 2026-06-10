import { BadgesService } from './badges.service';
export declare class BadgesController {
    private badgesService;
    constructor(badgesService: BadgesService);
    getMyBadges(req: any): Promise<({
        badge: {
            name: string;
            id: string;
            description: string;
            icon: string;
        };
    } & {
        id: string;
        userId: string;
        badgeId: string;
        earnedAt: Date;
    })[]>;
}
