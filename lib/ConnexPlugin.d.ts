/// <reference types="@vechain/connex" />
import { IMethodOrEventCall, EventFilter, SolidoProviderType } from '@decent-bet/solido';
import { ConnexSettings } from './ConnexSettings';
import { SolidoContract, SolidoSigner } from '@decent-bet/solido';
import { SolidoProvider } from '@decent-bet/solido';
export declare class ConnexPlugin extends SolidoProvider implements SolidoContract {
    connex: Connex;
    chainTag: string;
    defaultAccount: string;
    address: string;
    getProviderType(): SolidoProviderType;
    onReady<T>(settings: T & ConnexSettings): void;
    prepareSigning(methodCall: any, options: IMethodOrEventCall, args: any[]): Promise<SolidoSigner>;
    getAbiMethod(name: string, address?: string): object;
    getMethod(name: string, address?: string): any;
    callMethod(name: string, args: any[]): any;
    getEvent(name: string): any;
    getEvents<P, T>(name: string, eventFilter?: EventFilter<T & object[]>): Promise<(P & Connex.Thor.Event)[]>;
}
