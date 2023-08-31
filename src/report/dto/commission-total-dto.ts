export class CommissionTotal {
    debtCollectorId: number;
    debtCollectorName: string;
    commissionsRecoveryPesos: number;
    commissionsRecoveryDollar: number;

    constructor(commission: any) {
        const commissionDto: CommissionTotal = {
            debtCollectorId: commission.debtCollectorId,
            debtCollectorName: commission.debtCollectorName,
            commissionsRecoveryPesos: commission.totalCommissionsRecoveryPesos,
            commissionsRecoveryDollar: commission.totalCommissionsRecoveryDollar,
        };
        return commissionDto;
    }
}