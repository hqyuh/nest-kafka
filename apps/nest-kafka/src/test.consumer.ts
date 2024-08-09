import { ConsumerService } from '@app/common';
import { GROUP, TOPIC } from '@app/common/constants/kafkaConstant';
import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class TestConsumer implements OnModuleInit {
  constructor(private readonly consumerService: ConsumerService) {}

  async onModuleInit() {
    await this.consumerService.consume({
      topic: { topics: [TOPIC.TEST] },
      config: { groupId: GROUP.GROUP_TEST },
      onMessage: async (message) => {
        console.log({
          value: message.value.toString(),
        });
        // throw new Error('Test error!');
      },
    });
  }
}
