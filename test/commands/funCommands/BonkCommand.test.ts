import { Message } from 'discord.js';
import { expect } from 'chai';
import { BonkCommand } from '../../../src/commands/funCommands/BonkCommand.js';

describe('Bonk Command', function() {
  it('should trigger on \'dual event\'', function() {
    const content = 'dual event';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.true;
  });

  it('should trigger on \'double event\'', function() {
    const content = 'double event';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.true;
  });

  it('should trigger on \'triple event\'', function() {
    const content = 'triple event';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.true;
  });

  it('should trigger on \'quadruple event\'', function() {
    const content = 'quadruple event';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.true;
  });

  it('should trigger on \'dual events\'', function() {
    const content = 'dual events';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.true;
  });

  it('should trigger on \'double events\'', function() {
    const content = 'double events';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.true;
  });

  it('should trigger on \'triple events\'', function() {
    const content = 'triple events';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.true;
  });

  it('should trigger on \'quadruple events\'', function() {
    const content = 'quadruple events';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.true;
  });

  it('should not trigger on \'event\'', function() {
    const content = 'event';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.false;
  });

  it('should not trigger on \'events\'', function() {
    const content = 'events';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.false;
  });

  it('should not trigger on \'dual\'', function() {
    const content = 'dual';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.false;
  });

  it('should not trigger on \'double\'', function() {
    const content = 'double';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.false;
  });

  it('should not trigger on \'triple\'', function() {
    const content = 'triple';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.false;
  });

  it('should not trigger on \'quadruple\'', function() {
    const content = 'quadruple';
    const message = Message.prototype;
    message.content = content;
    const command = new BonkCommand();

    const result = command.trigger(message);
    expect(result).to.be.false;
  });
});