import {
    ContentItemModels,
    LanguageVariantModels,
} from 'kentico-cloud-content-management';
import { getTestKenticoClient } from '../external/kenticoClients';
import { CASCADE_PUBLISH_ID } from './projectSettings';

const EmptyGuid: string = '00000000-0000-0000-0000-000000000000';

export const publishDefaultLanguageVariant = async (itemId: string, scheduledTo?: string): Promise<void> => {
    const timeData = scheduledTo
        ? ({scheduled_to: scheduledTo})
        : undefined as any;

    await getTestKenticoClient()
        .publishOrScheduleLanguageVariant()
        .byItemId(itemId)
        .byLanguageId(EmptyGuid)
        .withData(timeData)
        .toPromise();
};

export const scheduleDefaultLanguageVariant = async (itemId: string): Promise<void> => {
    const date = new Date();
    date.setMinutes(date.getMinutes() + 2);
    const scheduledTo = date.toISOString();

    await publishDefaultLanguageVariant(itemId, scheduledTo);
};

export const unpublishDefaultLanguageVariant = async (itemId: string): Promise<void> => {
    await getTestKenticoClient()
        .unpublishLanguageVariant()
        .byItemId(itemId)
        .byLanguageId(EmptyGuid)
        .toPromise();
};

export const createNewVersionOfDefaultLanguageVariant = async (itemId: string): Promise<void> => {
    await getTestKenticoClient()
        .createNewVersionOfLanguageVariant()
        .byItemId(itemId)
        .byLanguageId(EmptyGuid)
        .toPromise();
};

export const setDefaultLanguageVariantToCascadePublishStep = async (itemId: string): Promise<void> => {
    await getTestKenticoClient()
        .changeWorkflowStepOfLanguageVariant()
        .byItemId(itemId)
        .byLanguageId(EmptyGuid)
        .byWorkflowStepId(CASCADE_PUBLISH_ID)
        .toPromise();
};

export const addContentItem = async (name: string, type: string): Promise<ContentItemModels.ContentItem> => {
    const response = await getTestKenticoClient()
        .addContentItem()
        .withData(
            {
                name,
                type: {
                    codename: type,
                },
            })
        .toPromise();

    return response.data;
};

export const upsertDefaultLanguageVariant = async (
    itemId: string,
    elements: LanguageVariantModels.ILanguageVariantElement[],
): Promise<LanguageVariantModels.ContentItemLanguageVariant> => {
    const response = await getTestKenticoClient()
        .upsertLanguageVariant()
        .byItemId(itemId)
        .byLanguageId(EmptyGuid)
        .withElements(elements)
        .toPromise();

    return response.data;
};

export const viewDefaultLanguageVariant = async (itemId: string) =>
    getTestKenticoClient()
        .viewLanguageVariant()
        .byItemId(itemId)
        .byLanguageId(EmptyGuid)
        .toPromise();
