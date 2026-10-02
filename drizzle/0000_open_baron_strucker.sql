CREATE TABLE `event_requests` (
	`id` text PRIMARY KEY NOT NULL,
	`kind` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`event_type` text NOT NULL,
	`event_date` text NOT NULL,
	`guest_count` integer NOT NULL,
	`details` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`created_at` text NOT NULL,
	`client_hash` text NOT NULL
);
