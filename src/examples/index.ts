export type FunctionType = () => Promise<{ sent: boolean }>;
export * from './sendHtmlEmail';
export * from './sendHtmlEmailWithAttachment';
export * from './sendNewPurchaseEmail';
export * from './sendPlainTextEmail';
export * from './sendServerStatusEmail';
export * from './sendSubscriptionRenewalEmail';