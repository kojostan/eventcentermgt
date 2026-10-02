import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const eventRequests=sqliteTable('event_requests',{
id:text('id').primaryKey(),kind:text('kind').notNull(),name:text('name').notNull(),email:text('email').notNull(),phone:text('phone').notNull(),eventType:text('event_type').notNull(),eventDate:text('event_date').notNull(),guestCount:integer('guest_count').notNull(),details:text('details').notNull(),status:text('status').notNull().default('pending'),createdAt:text('created_at').notNull(),clientHash:text('client_hash').notNull()
});
