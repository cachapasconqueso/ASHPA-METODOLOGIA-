import { PrismaService } from '../prisma/prisma.service';
export declare class BadgesService {
    private prisma;
    constructor(prisma: PrismaService);
    getMyBadges(userId: string): Promise<({
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
