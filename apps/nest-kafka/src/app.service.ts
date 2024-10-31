import { TOPIC } from '@app/common/constants/kafkaConstant';
import { ProducerService } from '@app/common/kafka/producer/producer.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}

  async getHello(): Promise<string> {
    await this.producerService.produce(TOPIC.TEST, {
      value: 'Send message from nest-kafka',
    });
    return 'Send message from nest-kafka!';
  }
}
