// Copyright 2020-2024 SubQuery Pte Ltd authors & contributors
// SPDX-License-Identifier: GPL-3.0

export enum IndexerEvent {
  ApiConnected = 'api_connected',
  BlockTarget = 'block_target_height',
  BlockBest = 'block_best_height',
  BlockProcessing = 'block_processing_height',
  BlockProcessedCount = 'block_processed_count',
  BlockQueueSize = 'block_queue_size',
  BlocknumberQueueSize = 'blocknumber_queue_size',
  NetworkMetadata = 'network_metadata',
  UsingDictionary = 'using_dictionary',
  SkipDictionary = 'skip_dictionary',
  StoreCacheThreshold = 'store_cache_threshold',
  StoreCacheRecordsSize = 'store_cache_records_size',
  Ready = 'ready',
  RewindSuccess = 'rewind_success',
  RewindFailure = 'rewind_failure',
}

export enum AdminEvent {
  rewindTarget = 'rewind_target',
  RewindTargetResponse = 'rewind_target_response',
}

export enum PoiEvent {
  LatestSyncedPoi = 'poi_synced',
  PoiTarget = 'poi_target',
}

export interface RewindPayload {
  success: boolean;
  height: number;
  message?: string;
}

export interface ProcessBlockPayload {
  height: number;
  timestamp: number;
}

export interface ProcessedBlockCountPayload {
  processedBlockCount: number;
  timestamp: number;
}

export interface TargetBlockPayload {
  height: number;
}

export interface BestBlockPayload {
  height: number;
}
export interface EventPayload<T> {
  value: T;
}

export interface NetworkMetadataPayload {
  chain: string;
  specName: string;
  genesisHash: string;
}
