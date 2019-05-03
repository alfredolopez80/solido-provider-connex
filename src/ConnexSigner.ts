import { SolidoSigner } from '@decent-bet/solido';

export class ConnexSigner implements SolidoSigner {
    constructor(private signingService: Connex.Vendor.TxSigningService, public payload: any) {}

    requestSigning(): Promise<any> {

        return this.signingService.request([
            {
                ...(this.payload as any)
            }
        ]) as Promise<any>;
    }
}
